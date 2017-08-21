var CostSimulator;

(function(){

    var ENTERPRISE = "Enterprise Edition"
      , COMMUNITY = "Community Edition";

    CostSimulator = function(){
        this.params = {};
        this.init();
    }
    
    var proto_ = CostSimulator.prototype;

    proto_.test = function(){
        var testParam = {
            // default
            edition: ENTERPRISE,
            frequency: 760000,
            minutes: 9500000,
            TURNRate: 5,
            SFURate: 0,
            BroadcastorRate: 100,
            partyNum: [
                [2, 100],
                [3,   0],
                [4,   0],
                [5,   0],
                [6,   0]
            ],
            BitRate: 1,
            UnitPrice: 40
        };

        this.setParams(testParam);
        this.calPrice();
    }

    proto_.calPrice = function(){
        var result = {};

        // 基本料金
        result.base = this.calBase();

        // シグナリング料金
        result.signaling = this.calSignaling();

        // TURN料金
        result.turn = this.calTURN();

        // SFU料金
        result.sfu = this.calSFU();

        result.total = {
            price: result.base.price + result.signaling.price + result.turn.price + result.sfu.price
        }

        this.showParams();
        this.showResult(result);
    }

    // 基本料金の計算
    proto_.calBase = function(){
        var edition = this.params.edition;

        if(edition===ENTERPRISE) return {price: 100000, edition: edition};
        else return {price: 0, edition: edition};
    }

    // Signalingの料金を計算
    proto_.calSignaling = function(){
        var frequency = this.params.frequency;

        if(frequency>1000000) return {price: 100000, usage: frequency};
        else return {price: 0, usage: frequency};
    }

    // TURNの料金を計算
    proto_.calTURN = function(){
        if(this.params.TURNRate == 0){
            // TURN利用なし
            return {price: 0, usage:0};
        }
        else {
            // TURN利用あり
            var usage = this.calTURNUsage();
            return {price: Math.floor(usage) * this.params.UnitPrice, usage: usage};
        }
    }

    // TURNのUsageを計算
    proto_.calTURNUsage = function(){
        // (MB/m) = BitRate(Mbps) * 60s / 8bit
        var MBytePerMin = this.params.BitRate * 60 / 8;
        var minutes = this.calTURNUsageMinutes();

        // usage(GB)
        var usage = minutes * MBytePerMin / 1000;
        return usage;
    }

    // TURNの利用時間(分)を計算
    // 5人が100分使ったら、500分
    proto_.calTURNUsageMinutes = function(){
        var partyNum = this.params.partyNum;
        var sumMinutes = 0;

        // TURNの利用時間を参加人数別で計算
        for(var i=0; i<partyNum.length; i++){
            if(partyNum[i][1]) {
                var N = partyNum[i][0]; // 通話人数
                var tR = this.params.TURNRate / 100; // TURN利用率
                var sR = this.params.SFURate / 100; // SFU利用率
                var bR = this.params.BroadcastorRate / 100; // 配信者率
                var streamNum = 2; // 通信数(up&down)
                var inoutNum = 2; // 課金回数(in&out)

                // N人での通話時間 = 通話時間 * N人での通話率
                var minutes = this.params.minutes * (partyNum[i][1] / 100);

                // 各PeerでのTURN利用時間(SFU利用なし)
                // 通話時間 * SFU非利用率 * 通信数(2*配信率) * 課金回数 * 通話相手 * TURN利用率
                var peerMinutes = minutes * (1-sR) * streamNum * bR * inoutNum * (N-1) * tR;

                // 各PeerでのTURN利用時間(SFU利用あり)
                // 通話時間 * SFU利用率 * 通信数(N*bR) * 課金回数 * TURN利用率
                peerMinutes += minutes * sR * (N*bR) * inoutNum * tR;

                // partyでのTURN利用時間 = 各peerでのTURN利用時間 * 参加人数
                sumMinutes += peerMinutes * N;
            }
        }

        return sumMinutes;
    }

    // SFUの料金を計算
    proto_.calSFU = function(){
        if(this.params.SFURate == 0){
            // SFU利用なし
            return {price: 0, usage: 0};
        }
        else {
            // SFU利用あり
            var usage = this.calSFUUsage();
            return {price: Math.floor(usage) * this.params.UnitPrice, usage: usage};
        }
    }    

    // SFUのUsageを計算
    proto_.calSFUUsage = function(){
        // (MB/m) = BitRate(Mbps) * 60s / 8bit
        var MBytePerMin = this.params.BitRate * 60 / 8;
        var minutes = this.calSFUUsageMinutes();

        // usage(GB)
        var usage = minutes * MBytePerMin / 1000;
        return usage;
    }

    // SFUの利用時間(分)を計算
    proto_.calSFUUsageMinutes = function(){
        var partyNum = this.params.partyNum;
        var sumMinutes = 0;

        // SFUの利用時間を参加人数別で計算
        for(var i=0; i<partyNum.length; i++){
            if(partyNum[i][1]) {
                var N = partyNum[i][0]; // 通話人数
                var sR = this.params.SFURate / 100; // SFU利用率
                var bR = this.params.BroadcastorRate / 100; // SFU配信者率

                // N人での通話時間 = 通話時間 * N人での通話率
                var minutes = this.params.minutes * (partyNum[i][1] / 100);

                // PartyでのSFU利用時間
                // 通話時間 * 配信者数(N*bR) * 通話人数(N) * SFU利用率
                var partyMinutes = minutes * N * bR * N * sR;

                sumMinutes += partyMinutes;
            }
        }

        return sumMinutes;
    }

    proto_.init = function(){
        var defaults = {
            // default
            edition: ENTERPRISE,
            frequency: 150000,
            minutes: 10000,
            TURNRate: 10,
            SFURate: 0,
            BroadcastorRate: 100,
            partyNum: [
                [2, 50],
                [3, 25],
                [4, 25],
                [5,  0],
                [6,  0]
            ],
            BitRate: 1,
            UnitPrice: 40
        };

        this.setParams(defaults);
    }

    // 入力内容を取得
    proto_.setParams = function(params){
        for (var property in params) {
            this.params[property] = params[property];
        }
    }

    proto_.showParams = function(){
        console.log(this.params);
    }

    proto_.showResult = function(result){
        console.log(result);

        $("#resultConditions").text(JSON.stringify(this.params, null, 2));

        $("#resultBaseEdition").text(result.base.edition);
        $("#resultBasePrice").text("¥" + result.base.price.toLocaleString());

        $("#resultSignalingUsage").text(result.signaling.usage.toLocaleString() + "回");
        $("#resultSignalingPrice").text("¥" + result.signaling.price.toLocaleString());

        $("#resultTURNUsage").text(result.turn.usage.toLocaleString() + "GB");
        $("#resultTURNPrice").text("¥" + result.turn.price.toLocaleString());

        $("#resultSFUUsage").text(result.sfu.usage.toLocaleString() + "GB");
        $("#resultSFUPrice").text("¥" + result.sfu.price.toLocaleString());

        $("#resultTotalPrice").text("¥" + result.total.price.toLocaleString());

        // 非表示にしているテンプレhtmlを複製して、表示する
        var $result = $("#calculateResult").clone().removeAttr("id");
        $result.find("td").removeAttr("id");
        $result.find("p").removeAttr("id");
        $result.prependTo("#Result").show();
    }
}());