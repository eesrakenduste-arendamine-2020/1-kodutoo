function stardi_kell() {
    let d = new Date();
    let tund = d.getHours();
    let minut = d.getMinutes();
    let sekund = d.getSeconds();
    if(sekund < 10){
        sekund = "0" + sekund;
    }
    if(minut < 10){
        minut = "0" + minut;
    }
    if(tund < 10){
        tund = "0" + tund;
    }
    let kuupaevavarv = document.getElementById("kuupaevavarv").value;
    let paevavarv = document.getElementById("paevavarv").value;
    let kirjavarv = document.getElementById("kirjavarv").value;
    document.body.style.backgroundColor = document.getElementById("taustavarv").value;
    document.getElementById('kella_aeg').innerHTML = '<div style=color:'+kirjavarv +'> Kell on   ' + tund + ":" + minut + ":" + sekund + " ";
    let t = setTimeout(stardi_kell, 100);
    let d_kuupaev = new Date();
    let dd = d_kuupaev.getDate();
    let mm = d_kuupaev.getMonth();
    let yyyy = d_kuupaev.getFullYear();
    let day = d_kuupaev.getDay();
    let dds = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'];
    let mms = ['jaanuar', 'veebruar','märts','aprill','mai','juuni','juuli','august','september','oktoober','november','detsember'];
    if(dd<10) {
        dd = '0' + dd
    }
    document.getElementById('kell_paev').innerHTML ='<div style=color:'+paevavarv +'> Täna on ' + dds[day] +  " ";
    document.getElementById('kell_kuu_aasta').innerHTML ='<div style=color:'+kuupaevavarv +'>' + dd + ' ' + mms[mm] + '  ' + yyyy + " ";
}