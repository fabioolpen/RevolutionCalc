var base=base_list[''];

function calculate() {
    if (typeof document.createElement("input").checkValidity == "function")
        document.getElementById('aform').checkValidity();
    var chp, catk, cdef, cspatk, cspdef, cspd, lvl;
    lvl=document.getElementById('lvl').value;
    if(isNaN(lvl) || lvl<1)
        lvl=0;
    base=base_list[document.getElementById('pkmn').value];

    var vitasHp= document.getElementById('hpvitas').value;
    parseInt(vitasHp);
    var vitasAtk = document.getElementById('atkvitas').value;
    var vitasDef = document.getElementById('defvitas').value;
    var vitasSpaAtk = document.getElementById('spavitas').value;
    var vitasSpDef = document.getElementById('spdefvitas').value;
    var vitasSpeed = document.getElementById('spdvitas').value;

    if(isNaN(vitasHp))
        document.getElementById('hpvitas').value = 0;
    if(isNaN(vitasAtk))
        vitasAtk=0;
    if(isNaN(vitasDef))
        vitasDef=0;
    if(isNaN(vitasSpaAtk))
        vitasSpaAtk=0;
    if(isNaN(vitasSpDef))
        vitasSpDef=0;
    if(isNaN(vitasSpeed))
        vitasSpeed=0;

    chp=document.getElementById('hp').value;
    catk=document.getElementById('atk').value;
    cdef=document.getElementById('def').value;
    cspatk=document.getElementById('spatk').value;
    cspdef=document.getElementById('spdef').value;
    cspd=document.getElementById('spd').value;

    var thp=(chp/(75 + parseInt(vitasHp))) * 100;
    var tatk=(catk/(75 + parseInt(vitasAtk))) * 100;
    var tdef=(cdef/(75 + parseInt(vitasDef))) * 100;
    var tspatk=(cspatk/(75 + parseInt(vitasSpaAtk))) * 100;
    var tspdef=(cspdef/(75 + parseInt(vitasSpDef))) * 100;
    var tspd= (cspd/(75 + parseInt(vitasSpeed))) * 100;


    chp = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(thp);
    catk = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(tatk);
    cdef = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(tdef);
    cspatk = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(tspatk);
    cspdef = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(tspdef);
    cspd = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(tspd);

    if(isNaN(chp))
        chp=0;
    if(isNaN(catk))
        catk=0;
    if(isNaN(cdef))
        cdef=0;
    if(isNaN(cspatk))
        cspatk=0;
    if(isNaN(cspdef))
        cspdef=0;
    if(isNaN(cspd))
        cspd=0;
    document.getElementById('results').innerHTML="<table class='table table-bordered text-white table-striped justify-content-center' style='width:500px;'><tr><td colspan='4'><b>"+base['name']+" "+lang_level+" "+lvl+"</b></td></tr><tr><th colspan='2' style='width: 150px'>"+lang_basestats+"</th><th style='width:125px;'>"+lang_range+"</th><th style='width:175px'>"+lang_possibleivs+"</th></tr><tr><td>"+lang_hp+nat('hp')+"</td><td>"+base['hp']+"</td><td>"+range('hp')+"</td><td>"+iv_value('hp',chp)+"</td></tr><tr><td>"+lang_atk+nat('atk')+"</td><td>"+base['atk']+"</td><td>"+range('atk')+"</td><td>"+iv_value('atk',catk)+"</td></tr><tr><td>"+lang_def+nat('def')+"</td><td>"+base['def']+"</td><td>"+range('def')+"</td><td>"+iv_value('def',cdef)+"</td></tr><tr><td>"+lang_spatk+nat('spatk')+"</td><td>"+base['spatk']+"</td><td>"+range('spatk')+"</td><td>"+iv_value('spatk',cspatk)+"</td></tr><tr><td>"+lang_spdef+nat('spdef')+"</td><td>"+base['spdef']+"</td><td>"+range('spdef')+"</td><td>"+iv_value('spdef',cspdef)+"</td></tr><tr><td>"+lang_spd+nat('spd')+"</td><td>"+base['spd']+"</td><td>"+range('spd')+"</td><td>"+iv_value('spd',cspd)+"</td></tr><tr><td>"+lang_total+"</td><td>"+(parseInt(base['hp'])+base['atk']+base['def']+base['spatk']+base['spdef']+base['spd'])+"</td><td>---</td><td>"+iv_total(chp,catk,cdef,cspatk,cspdef,cspd)+"</td></tr></table>";
}
function nat(stat) {
    stat=nature(stat);
    if(stat>1)
        return "<span title='10% increase from nature'>+</span>";
    else if(stat<1)
        return "<span title='10% decrease from nature'>-</span>";
    else
        return '';
}
function loadFromURI() {
    var getv=(new RegExp('[?&]pkmn=([^&]*)')).exec(location.search);
    if(getv!=undefined && getv[1]!=undefined && getv[1]!='') {
        getv=getv[1].split(':');
        document.getElementById('name').value=decodeURIComponent(getv[0]);
        document.getElementById('lvl').value=parseInt(getv[2],36);
        if(!isNaN(parseInt(getv[3],36)))
            document.getElementById('nature').options[parseInt(getv[3],36)].selected=true;
        if(!isNaN(parseInt(getv[16])))
            document.getElementById('gender').options[parseInt(getv[16])].selected=true;
        document.getElementById('hp').value=parseInt(getv[4],36);
        document.getElementById('atk').value=parseInt(getv[5],36);
        document.getElementById('def').value=parseInt(getv[6],36);
        document.getElementById('spatk').value=parseInt(getv[7],36);
        document.getElementById('spdef').value=parseInt(getv[8],36);
        document.getElementById('spd').value=parseInt(getv[9],36);
        document.getElementById('hpev').value=parseInt(getv[10],36);
        document.getElementById('atkev').value=parseInt(getv[11],36);
        document.getElementById('defev').value=parseInt(getv[12],36);
        document.getElementById('spatkev').value=parseInt(getv[13],36);
        document.getElementById('spdefev').value=parseInt(getv[14],36);
        document.getElementById('spdev').value=parseInt(getv[15],36)
        document.getElementById('hpvitas').value=parseInt(getv[17],36)
        return getv[1];
    }
    return false;
}
function to36(num) {
    if(isNaN(num) || isNaN(parseInt(num)))
        return '';
    return parseInt(num).toString(36);
}
function range(stat) {
    if(stat=='hp' && base['hp']=='1*')
        return 1;
    return calc_stat(stat,0)+'-'+calc_stat(stat,31);
}
function iv_total(chp,catk,cdef,cspatk,cspdef,cspd) {
    var hp, atk, def, spatk, spdef, spd, low=0, high=0;
    hp=iv_value('hp',chp).split('-');
    atk=iv_value('atk',catk).split('-');
    def=iv_value('def',cdef).split('-');
    spatk=iv_value('spatk',cspatk).split('-');
    spdef=iv_value('spdef',cspdef).split('-');
    spd=iv_value('spd',cspd).split('-');
    hp[0]=parseInt(hp[0]);
    atk[0]=parseInt(atk[0]);
    def[0]=parseInt(def[0]);
    spatk[0]=parseInt(spatk[0]);
    spdef[0]=parseInt(spdef[0]);
    spd[0]=parseInt(spd[0]);
    if(hp.length>1) {
        low+=hp[0];
        high+=parseInt(hp[1]);
    } else if(!isNaN(hp[0])) {
        low+=hp[0];
        high+=hp[0];
    }
    if(atk.length>1) {
        low+=atk[0];
        high+=parseInt(atk[1]);
    } else if(!isNaN(atk[0])) {
        low+=atk[0];
        high+=atk[0];
    }
    if(def.length>1) {
        low+=def[0];
        high+=parseInt(def[1]);
    } else if(!isNaN(def[0])) {
        low+=def[0];
        high+=def[0];
    }
    if(spatk.length>1) {
        low+=spatk[0];
        high+=parseInt(spatk[1]);
    } else if(!isNaN(spatk[0])) {
        low+=spatk[0];
        high+=spatk[0];
    }
    if(spdef.length>1) {
        low+=spdef[0];
        high+=parseInt(spdef[1]);
    } else if(!isNaN(spdef[0])) {
        low+=spdef[0];
        high+=spdef[0];
    }
    if(spd.length>1) {
        low+=spd[0];
        high+=parseInt(spd[1]);
    } else if(!isNaN(spd[0])) {
        low+=spd[0];
        high+=spd[0];
    }
    if(low==high)
        return low;
    return low+'-'+high;
}
function iv_value(stat,cstat) {
    var i, mstat=-1, xstat=-1;
    i=0;
    while(i<=31) {
        if(calc_stat(stat,i)==cstat) {
            mstat=i;
            i=32;
        }
        ++i;
    }
    i=31;
    while(i>=0) {
        if(calc_stat(stat,i)==cstat) {
            xstat=i;
            i=-1;
        }
        --i;
    }
    if(mstat==-1 || xstat==-1)
        return lang_invalidvalue;
    else if(mstat==xstat)
        return mstat+'';
    else
        return mstat+'-'+xstat;
}
function calc_stat(stat,iv) {
    var ev, lvl;
    lvl=document.getElementById('lvl').value;
    if(isNaN(lvl))
        lvl=0;
    ev=document.getElementById(stat+'ev').value;
    if(isNaN(iv))
        iv=0;
    if(isNaN(ev))
        ev=0;
    if(stat==='hp')
        if(base[stat]=='1*')
            return 1;
        else
            return Math.floor(Math.floor((((iv+(2*base[stat])+(ev/4)+100)*lvl)/100)+10)*nature('hp'));
    else {
        return Math.floor(Math.floor((((iv+(2*base[stat])+(ev/4))*lvl)/100)+5)*nature(stat));
    }
}
function nature(stat) {
    var i=document.getElementById('nature').value;
    if(isNaN(i))
        i=0;
    if(stat==='hp') {
        return 1
    }
    if(stat==='atk') {
        if(i==2 || i==3 || i==4 || i==5)
            return 1.1;
        else if(i==6 || i==11 || i==16 || i==21)
            return 0.9;
        else
            return 1;
    }
    if(stat==='def') {
        if(i==6 || i==8 || i==9 || i==10)
            return 1.1;
        else if(i==2 || i==12 || i==17 || i==22)
            return 0.9;
        else
            return 1;
    }
    if(stat==='spatk') {
        if(i==16 || i==17 || i==18 || i==20)
            return 1.1;
        else if(i==4 || i==9 || i==14 || i==24)
            return 0.9;
        else
            return 1;
    }
    if(stat==='spdef') {
        if(i==21 || i==22 || i==23 || i==24)
            return 1.1;
        else if(i==5 || i==10 || i==15 || i==20)
            return 0.9;
        else
            return 1;
    }
    if(stat==='spd') {
        if(i==11 || i==12 || i==14 || i==15)
            return 1.1;
        else if(i==3 || i==8 || i==18 || i==23)
            return 0.9;
        else
            return 1;
    }
}