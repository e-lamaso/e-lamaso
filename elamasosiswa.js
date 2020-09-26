var script_url = "https://script.google.com/macros/s/AKfycbwirOaKVnW7gjsOORkS9DM1WLcs8BO8FAhTqRZdNTQb5eJnVn8z/exec";
var script_url2 = "https://script.google.com/macros/s/AKfycbwoyfJfDungZUUoAaXas4gJsgVOpOQQDKxR3JFMTDmEIMtQkNM/exec";


function teskirimjson() {
    var namaform = document.kirimnilaielamaso;
    var res = KoleksiFormSiswa(namaform);
    var kirimdataini = encodeURIComponent(JSON.stringify(res.data));
    tescekelement.innerHTML = "stringify :<br/>" + JSON.stringify(res.data) + "<br/>"
    tescekelement.innerHTML += "encodeURIComponent :<br/> "
    tescekelement.innerHTML += kirimdataini;
    //console.log(res.data)
}
$(document).ready(function () {
    //UNTUK BLOG dan HP
    kontenLamaso.style.display = "none";
    hasilbelajarsekali.style.display = "none";
    hasilakhir.style.display = "none";
    divdaftarnilai.style.display = "none";


    var hcpt = document.getElementById("hakcipta");
    if (hcpt == null) {
        var hcpt = document.createElement("div");
        2
        hcpt.setAttribute("id", "hakcipta");
        hcpt.setAttribute("class", "w3-main");
        hcpt.setAttribute("style", "margin-left:300px;margin-bottom:140px;margin-top:220px;text-align:center;font-size:10px")
        var thcpt = document.createTextNode("@2020 Created By. Ade Andriansyah Kunjungi ");
        hcpt.appendChild(thcpt)
        var an = document.createElement("a");
        an.setAttribute("href", "https://syahandrianeda.blogspot.com");
        an.setAttribute("target", "_blank");
        an.innerHTML = "Blog Pribadi";
        hcpt.appendChild(an);
        hcpt.innerHTML += " atau ";
        var an = document.createElement("a");
        an.setAttribute("href", "https://www.sdnratujaya1.net/");
        an.setAttribute("target", "_blank");
        an.innerHTML = "Web Sekolah";
        hcpt.appendChild(an);

        //\r\n Kunjungi blog: <a href='https://syahandrianeda.blogspot.com' target='_blank'>Blog Pribadi</a> atau <a href='https://www.sdnratujaya1.net/' target='_blank'> Web Sekolah</a> ");
        document.body.appendChild(hcpt);
        document.body.appendChild(hcpt)
    }


    // Timer
    (function ($) {
        $.extend({
            APP: {
                formatTimer: function (a) {
                    if (a < 10) {
                        a = '0' + a;
                    }
                    return a;
                },
                startTimer: function (dir) {
                    var a;
                    // save type
                    $.APP.dir = dir;
                    // get current date
                    $.APP.d1 = new Date();
                    switch ($.APP.state) {
                        case 'pause':
                            // resume timer
                            // get current timestamp (for calculations) and
                            // substract time difference between pause and now
                            $.APP.t1 = $.APP.d1.getTime() - $.APP.td;
                            break;
                        default:
                            // get current timestamp (for calculations)
                            $.APP.t1 = $.APP.d1.getTime();
                            // if countdown add ms based on seconds in textfield
                            if ($.APP.dir === 'cd') {
                                $.APP.t1 += parseInt($('#cd_seconds').val()) * 60000;
                            }
                            break;
                    }
                    // reset state
                    $.APP.state = 'alive';
                    $('#' + $.APP.dir + '_status').html('Durasi Waktu Masih Berjalan');
                    // start loop
                    $.APP.loopTimer();
                },
                pauseTimer: function () {
                    // save timestamp of pause
                    $.APP.dp = new Date();
                    $.APP.tp = $.APP.dp.getTime();
                    // save elapsed time (until pause)
                    $.APP.td = $.APP.tp - $.APP.t1;
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Berhenti dari Jeda');
                    // set state
                    $.APP.state = 'pause';
                    $('#' + $.APP.dir + '_status').html('Jeda');
                },
                stopTimer: function () {
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi');
                    // set state
                    $.APP.state = 'stop';
                    $('#' + $.APP.dir + '_status').html('Selesai');

                },
                resetTimer: function () {
                    // reset display
                    $('#' + $.APP.dir + '_ms,#' + $.APP.dir + '_s,#' + $.APP.dir + '_m,#' + $.APP.dir + '_h').html('00');
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi!');
                    // set state
                    $.APP.state = 'reset';
                    $('#' + $.APP.dir + '_status').html('Setel ulang waktu untuk mengerjakan');
                },
                endTimer: function (callback) {
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi');
                    // set state
                    $.APP.state = 'end';
                    // invoke callback
                    if (typeof callback === 'function') {
                        callback();
                        // tambahan
                        hasilakhirelamaso();
                    }

                },
                loopTimer: function () {
                    var td;
                    var d2, t2;
                    var ms = 0;
                    var s = 0;
                    var m = 0;
                    var h = 0;
                    if ($.APP.state === 'alive') {
                        // get current date and convert it into 
                        // timestamp for calculations
                        d2 = new Date();
                        t2 = d2.getTime();
                        // calculate time difference between
                        // initial and current timestamp
                        if ($.APP.dir === 'sw') {
                            td = t2 - $.APP.t1;
                            // reversed if countdown
                        } else {
                            td = $.APP.t1 - t2;
                            if (td <= 0) {
                                // if time difference is 0 end countdown
                                $.APP.endTimer(function () {
                                    $.APP.resetTimer();
                                    $('#' + $.APP.dir + '_status').html('Ulangi Latihan');
                                });
                            }
                        }
                        // calculate milliseconds
                        ms = td % 1000;
                        if (ms < 1) {
                            ms = 0;
                        } else {
                            // calculate seconds
                            s = (td - ms) / 1000;
                            if (s < 1) {
                                s = 0;
                            } else {
                                // calculate minutes   
                                var m = (s - (s % 60)) / 60;
                                if (m < 1) {
                                    m = 0;
                                } else {
                                    // calculate hours
                                    var h = (m - (m % 60)) / 60;
                                    if (h < 1) {
                                        h = 0;
                                    }
                                }
                            }
                        }
                        // substract elapsed minutes & hours
                        ms = Math.round(ms / 100);
                        s = s - (m * 60);
                        m = m - (h * 60);
                        // update display
                        $('#' + $.APP.dir + '_ms').html($.APP.formatTimer(ms));
                        $('#' + $.APP.dir + '_s').html($.APP.formatTimer(s));
                        $('#' + $.APP.dir + '_m').html($.APP.formatTimer(m));
                        $('#' + $.APP.dir + '_h').html($.APP.formatTimer(h));
                        // loop
                        $.APP.t = setTimeout($.APP.loopTimer, 1);
                    } else {
                        // kill loop
                        clearTimeout($.APP.t);
                        return true;

                    }

                }

            }

        });


        //$('#cd_start,#timermulai').live('click', function() { //LAMASO ASLI
        $('#cd_start').live('click', function () { //LAMASO ASLI
            //$.APP.startTimer('cd');
            mulaibelajar();
        });
        $('#cd_stop,#selesaingambang').live('click', function () { //LAMASO ASLI
            //$.APP.stopTimer();
            $.APP.resetTimer();
            hasilakhirelamaso();
            $('html,body').animate({
                scrollTop: $("#hasilakhir").offset().top
            }, 1000);

        });
        $('#cd_reset').live('click', function () {
            $.APP.resetTimer();
        });
        $('#cd_pause').live('click', function () {
            $.APP.pauseTimer();
        });

    })(jQuery);
    //HP
    logosekolahmenu.src = "https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png"
    namasekolah.innerHTML = "SEKOLAH KAMU";
    namakota.innerHTML = "KOTA KAMU";
    barsiswa.style.display = "none";

    // memanggil data user untuk mengambil data siswa

    mulaimulai.style.display = "none"
    cek.innerHTML = "<i class='fa fa-spin fa-spinner' style='font-size:36px'></i> Sedang Prosess ..."
    datauser.innerHTML = "";
    var link = script_url2 + "?action=datauser"
    $.getJSON(link, function (json) {
        var ut = document.createElement("table");
        ut.setAttribute("class", "versi-table");
        ut.setAttribute("id", "id_tabel_user");
        var tr = ut.insertRow(-1);
        var namaheader = Object.keys(json.records[0])
        for (var i = 0; i < namaheader.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = namaheader[i]
            tr.appendChild(th)
        }

        for (var j = 0; j < json.records.length; j++) {
            var trb = ut.insertRow(-1);
            for (k in json.records[0]) {
                var cell = trb.insertCell(-1);
                cell.innerHTML = json.records[j][k]
            }

        }
        datauser.appendChild(ut)
        cek.innerHTML = "Silakan Masukkan Token dari Gurumu";
        mulaimulai.style.display = "block";

        //console.log(json);
        // var banyakkolom = Object.keys(json.records[0]); //.length;
        // var banyakbaris = Object.keys(json.records).length;

        // console.log(banyakkolom);
        // console.log(banyakbaris);
    })

})

function tombolkirimnilaielamaso() {
    var namaform = document.kirimnilaielamaso;
    hasilakhir.style.display = "none";
    hasilbelajarsekali.style.display = "block";
    tescekelement.innerHTML = " Sedang Proses Kirim ... <i fa-spin fa-spinner w3-xxxlarge></i>"
    var res = KoleksiFormSiswa(namaform);
    //var kirimdataini = encodeURIComponent(JSON.stringify(res.data));
    var kirimdataini = new URLSearchParams(res.data);

    var usersekolah = keysekolah.innerHTML
    var alt_url;
    if (usersekolah == "SDN Ratujaya 1") {
        //alt_url = script_url;
        alt_url = "https://script.google.com/macros/s/AKfycbwLeZkdqHemahH9oJbNqTVWQ4kQoE71QfwwCMYUZGw_4926zDTT/exec"
    } else {
        alt_url = script_url2;
    }

    var url = alt_url + "?action=siswakirimnilai"; // + kirimdataini;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {

            tescekelement.innerHTML = "Terima Kasih, Ananda telah menyelesaikan pembelajaran ini dengan hasil:<br/>Skor PG = " + nilaiPGku.innerHTML; //+ xhr.responseText ;

        }
    };
    // url encode form data for sending as post data

    xhr.send(kirimdataini);
}

function tombolkirimnilaielamasoGAGAL() {
    //alert("tes")
    var namaform = document.kirimnilaielamaso;
    var res = KoleksiFormSiswa(namaform);
    //var kirimdataini = encodeURIComponent(JSON.stringify(res.data));
    var kirimdataini = new URLSearchParams(res.data);

    var url = "https://script.google.com/macros/s/AKfycbwLeZkdqHemahH9oJbNqTVWQ4kQoE71QfwwCMYUZGw_4926zDTT/exec?action=siswakirimnilai"; // + kirimdataini;
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        data: res.data,
        dataType: "jsonp",
        method: "GET",
        success: function bershailkah(e) {
            tescekelement.innerHTML = e.result
        }


    })

    //console.log(request.statusText)
}

function htmlnilaisiswa() {


    //-------------- MASUKKAN SEMU DATA KE FORM YANG AKAN DIKIRIM KE SERVER ---------------
    var teksarea = document.getElementById("tekshtmlnilai");
    var isiteks = document.getElementById("borderidhasilakhirnama");
    teksarea.textContent = isiteks.innerHTML; //window.btoa(isiteks.innerHTML);
}

function hasilakhirelamaso() { // untuk tipe berkali-kali (bukan type token akses lamaso "sekali"
    var keytokenakses = keyaksessiswa.innerHTML;
    //konten isi materi, dan identitas waktu disembunyikan. Baik untuk akses "sekali", ataupun "beberapa kali"
    materiimport.style.display = "none";
    tes.style.display = "none"

    if (keytokenakses == "beberapa kali") {
        resumenilai.style.display = "block";
        hasilakhir.style.display = "block";
        cmd.style.display = "block";

        var elSoal = document.getElementsByClassName("calcnosoal");
        var elPG = document.getElementsByClassName("calc");
        var tempatLJ = document.getElementById("resumenilai");
        tempatLJ.innerHTML = "";
        var kuncijawaban = window.atob(tttkeybase.innerHTML);
        // identitasnya dulu;
        hasilakhirnamasekolah.innerHTML = keyidSekolah.innerHTML;
        hasilakhirnamasiswa.innerHTML = previewpilihnama.value;
        hasilakhirmapeltema.innerHTML = keymapel.innerHTML;
        //hasilakhirmapeltema
        hasilakhirkelas.innerHTML = keykelas.innerHTML;
        hasilakhirwaktu.innerHTML = waktusekarang();
        // hasil ceklis
        //tempatLJ.innerHTML = "<table><tr><td>Pilihan Ganda:</td></tr>";
        var tblpg = document.createElement("table");
        var tr = tblpg.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Pilihan Ganda:"
        var koleksiceklis = []
        for (var a = 0; a < elPG.length; a++) {
            if (elPG[a].checked) {
                var idopsi = elPG[a].getAttribute("id").replace(/\s+/g, "");
                koleksiceklis.push(idopsi)
                var tr = tblpg.insertRow(-1);
                var td = tr.insertCell(-1);
                td.innerHTML = idopsi;

            }
        }
        //tempatLJ.innerHTML += "<tr><td>" + koleksiceklis.join("<br/>") + "</td></tr>";;
        //tempatLJ.innerHTML += 
        var cB = 0;
        for (var b = 0; b < koleksiceklis.length; b++) {
            var resPG = PGBenar(kuncijawaban, koleksiceklis[b])
            if (resPG == "Benar") {
                cB += 1
            }
        }
        var NilaiAkhirPGnya = (cB / elSoal.length * 100).toFixed(2)
        //tempatLJ.innerHTML += "<tr></td><b style='color:blue'>Skor PG</b> = <b style='color:red'>" + NilaiAkhirPGnya + "</b></td></tr>";
        //tempatLJ.innerHTML += "</table>";
        var tr = tblpg.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "<b style='color:blue'>Skor PG</b> = <b style='color:red'>" + NilaiAkhirPGnya + "</b>"
        tempatLJ.appendChild(tblpg);

        // soalessay = ;
        var resulthasilessay = "";
        //resulthasilessay += "<!-- ADD_PAGE -->";
        var elFilejawaban = document.getElementsByClassName("filejawaban");
        if (elFilejawaban.length > 0) { //mengantisipasi jika tidak ada filejawaban kosong ga perlu dieksekusi
            for (var c = 0; c < elFilejawaban.length; c++) {
                var innernya = elFilejawaban[c].tagName;
                var noessay = elFilejawaban[c].getAttribute("id").replace("filejawaban", "");
                //console.log(innernya)
                if (innernya == "TEXTAREA") {
                    resulthasilessay += "<p style='color:blue'>Pertanyaan No. " + noessay + " :</p>";
                    resulthasilessay += document.getElementById("pertanyaanessay_" + noessay).innerHTML + "<hr style='border-top:1px solid black'/><p style='color:red'>Jawaban:</p>";
                    resulthasilessay += elFilejawaban[c].value.split("\n").join("<p>");
                    //resulthasilessay += "</li></ol>"
                } else {
                    resulthasilessay += "<p style='color:blue'>Pertanyaan No. " + noessay + " :</p>";
                    resulthasilessay += document.getElementById("pertanyaanessay_" + noessay).innerHTML + "<hr style='border-top:1px solid black'/><p style='color:red'>Jawaban:</p>";

                    resulthasilessay += elFilejawaban[c].outerHTML;
                }
            }

        }
        tempatLJ.innerHTML += resulthasilessay;
    } else {

        hasilakhir.style.display = "block";
        cmd.style.display = "none";
        bypassme.style.display = "none";
        var elSoal = document.getElementsByClassName("calcnosoal");
        var elPG = document.getElementsByClassName("calc");
        var tempatLJ = document.getElementById("resumenilai");
        tempatLJ.innerHTML = "";
        var kuncijawabann = window.atob(tttkeybase.innerHTML);
        var kuncijawaban = window.atob(tttkeybase.innerHTML).split(",");
        // identitasnya dulu;
        hasilakhirnamasekolah.innerHTML = keyidSekolah.innerHTML;
        hasilakhirnamasiswa.innerHTML = previewpilihnama.value;
        hasilakhirmapeltema.innerHTML = keymapel.innerHTML;
        //hasilakhirmapeltema
        hasilakhirkelas.innerHTML = keykelas.innerHTML;
        hasilakhirwaktu.innerHTML = waktusekarang();
        // hasil ceklis
        //tempatLJ.innerHTML = "<table><tr><td>Pilihan Ganda:</td></tr>";
        tempatLJ.innerHTML += "PILIHAN GANDA:"
        var tblpg = document.createElement("table");
        tblpg.setAttribute("class", "versi-table")
        var tr = tblpg.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Jawaban"
        var td = tr.insertCell(-1);
        td.innerHTML = "Kunci:"
        var td = tr.insertCell(-1);
        td.innerHTML = "Nilai"

        var koleksiceklis = []
        var indexkunci = 0;
        for (var a = 0; a < elPG.length; a++) {
            if (elPG[a].checked) {
                var idopsi = elPG[a].getAttribute("id").replace(/\s+/g, "");
                koleksiceklis.push(idopsi)
                var tr = tblpg.insertRow(-1);
                var td = tr.insertCell(-1);
                td.innerHTML = idopsi;
                var td = tr.insertCell(-1);
                td.innerHTML = kuncijawaban[parseInt(idopsi) - 1];
                var td = tr.insertCell(-1);
                td.innerHTML = PGBenar(kuncijawabann, idopsi)

            }
            indexkunci += 1;
        }

        //tempatLJ.appendChild(tblpg);

        //tempatLJ.innerHTML += "<tr><td>" + koleksiceklis.join("<br/>") + "</td></tr>";;
        //tempatLJ.innerHTML += 

        //var tblpg = document.getElementById("tabelku");
        var cB = 0;
        for (var b = 0; b < koleksiceklis.length; b++) {
            var resPG = PGBenar(kuncijawaban, koleksiceklis[b])
            if (resPG == "Benar") {
                cB += 1
            }
        }
        var NilaiAkhirPGnya = (cB / elSoal.length * 100).toFixed(2)
        //tempatLJ.innerHTML += "<tr></td><b style='color:blue'>Skor PG</b> = <b style='color:red'>" + NilaiAkhirPGnya + "</b></td></tr>";
        //tempatLJ.innerHTML += "</table>";
        var tr = tblpg.insertRow(-1);
        var td = tr.insertCell(-1);
        td.setAttribute("colspan", "2");
        td.innerHTML = "<b style='color:blue'>Skor PG</b>"
        var td = tr.insertCell(-1);

        td.innerHTML = " <b id='nilaiPGku' style='color:red'>" + NilaiAkhirPGnya + "</b>"
        tempatLJ.appendChild(tblpg);



        // soalessay = ;
        var resulthasilessay = "JAWABAN ESSAY:<br/>";

        //resulthasilessay += "<!-- ADD_PAGE -->";
        var elFilejawaban = document.getElementsByClassName("filejawaban");
        if (elFilejawaban.length > 0) { //mengantisipasi jika tidak ada filejawaban kosong ga perlu dieksekusi
            for (var c = 0; c < elFilejawaban.length; c++) {
                var innernya = elFilejawaban[c].tagName;
                var noessay = elFilejawaban[c].getAttribute("id").replace("filejawaban", "");
                //console.log(innernya)
                if (innernya == "TEXTAREA") {
                    resulthasilessay += "<ol style='list-style-type:decimal' start='" + noessay + "'><li><b style='color:blue'>Pertanyaan:</b>:<br/>";
                    resulthasilessay += document.getElementById("pertanyaanessay_" + noessay).innerHTML + "<hr style='border-top:1px solid black'/><b style='color:blue'>Jawaban:</b>:<br/>";
                    resulthasilessay += elFilejawaban[c].value.split("\n").join("<br/>");
                    resulthasilessay += "<div id='untuklj" + noessay + "' class='koleksilj' style='border:1px solid red;padding:5px;background-color:#eeeeff'>Nilai</div>";
                    resulthasilessay += "</li></ol>";

                } else {
                    //resulthasilessay += "<!-- ADD_PAGE -->";
                    //resulthasilessay +="<ol style='list-style-type:decimal' start='"+noessay+"'><li>";
                    //resulthasilessay += document.getElementById("pertanyaanessay_"+noessay).innerHTML +"<hr style='border-top:1px solid black'/>";
                    //resulthasilessay += "<p>"+elFilejawaban[c].innerHTML+"</p>";
                    resulthasilessay += "<ol style='list-style-type:decimal' start='" + noessay + "'><li><b style='color:blue'>Pertanyaan:</b>:<br/>";
                    resulthasilessay += document.getElementById("pertanyaanessay_" + noessay).innerHTML + "<hr style='border-top:1px solid black'/><b style='color:blue'>Jawaban:</b>:<br/>";

                    resulthasilessay += elFilejawaban[c].outerHTML;
                    resulthasilessay += "<div id='untuklj" + noessay + "' class='koleksilj' style='border:1px solid red;padding:5px;background-color:#eeeeff'>Nilai</div>";
                    resulthasilessay += "</li></ol>";

                }
            }

        }
        tempatLJ.innerHTML += resulthasilessay;

        ceknilai();
        //--------------htmlnilaisiswa(); --------------------
        var teksarea = document.getElementById("tekshtmlnilai");
        var isiteks = document.getElementById("borderidhasilakhirnama");
        var teksbtoa = encodeURIComponent(isiteks.innerHTML);

        teksarea.textContent = window.btoa(unescape(encodeURIComponent(isiteks.innerHTML)));
        resumenilai.style.display = "none";
        //----------------------------------------------------
        var belumadatombol = document.getElementById("idtombolkirimnilaielamaso")
        if (belumadatombol == null) {
            var tengah = document.createElement("center");
            var kirimnilaikeserver = document.createElement("button");
            kirimnilaikeserver.setAttribute("onclick", "tombolkirimnilaielamaso()");
            kirimnilaikeserver.setAttribute("id", "idtombolkirimnilaielamaso");
            kirimnilaikeserver.setAttribute("class", "wa");
            kirimnilaikeserver.innerHTML = "<i class='fa fa-paper-plane'></i> Kirim Nilai"
            tengah.appendChild(kirimnilaikeserver);
            borderidhasilakhirnama.innerHTML += "<hr/><center>Terima kasih, Nilai Ananda siap dikirim ke server e-Lamaso. Klik tombol Kirim Nilai agar diproses gurumu.</center>";
            borderidhasilakhirnama.innerHTML += "<hr/>";
            borderidhasilakhirnama.appendChild(tengah);
        }
    }


}

function waktusekarang() {

    var d = new Date();
    var n = addZero(d.getDate());
    var y = d.getFullYear();
    var m = addZero(d.getMonth() + 1);
    var j = addZero(d.getHours());
    var mnt = addZero(d.getMinutes());
    var dtk = addZero(d.getSeconds());
    var str = "Tgl " + n + "/" + m + "/" + y + " Pkl. " + j + ":" + mnt + ":" + dtk;
    return str
}

function BuatJson() {
    var objekan = [];
    var element = document.kirimnilaielamaso;
    var jsontes = KoleksiFormSiswa(element);
    tesjson.innerHTML = JSON.stringify(jsontes);
    console.log(jsontes);
}

function KoleksiFormSiswa(form) {
    //--------- mendefinisikan beberapa element
    var koleksielement = form.elements;
    //--------- element yang digunakan untuk element spam
    var koleksispam;


    var bidangdata = Object.keys(koleksielement)
        .filter(function (k) {
            if (koleksielement[k].name === "koleksispam") {
                koleksispam = koleksielement[k].value;
                return false;
            }
            return true;
        })
        .map(function (k) {
            if (koleksielement[k].name !== undefined) {
                return koleksielement[k].name;
            } else if (koleksielement[k].length > 0) {
                return koleksielement[k].item(0).name;
            }
        }).filter(function (item, pos, self) {
            return self.indexOf(item) == pos && item;
        });
    console.log(bidangdata);
    var Dataform = {};
    bidangdata.forEach(function (name) {
        var element = koleksielement[name];
        // jika datanya memiliki satu nilai (value), biasanya berupa teks dalam value.
        Dataform[name] = element.value;

        // ketika data value-nya bukan teks, seperti value pada tag input type radio, atau tag select, maka dibuatkan array lagi dengan fungsi tambah array [.push('new Array')
        if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
                var item = element.item(i);
                if (item.checked || item.selected) {
                    data.push(item.value);
                }
            }
            console.log(data);
            Dataform[name] = data.join(', ');
        }
    });

    Dataform.formDataNameOrder = JSON.stringify(bidangdata);
    //Dataform.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    //Dataform.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    return {
        data: Dataform
    }; //, koleksispam: koleksispam};
}

function uploadpotoessay(id) {
    var item = document.getElementById("iduploadpotoessay" + id).files[0];
    var tempat = document.getElementById("filejawaban" + id);
    tempat.innerHTML = ""
    var ofReader = new FileReader();
    ofReader.readAsDataURL(item);
    var resize_width = "150"
    ofReader.onload = function (e) {
        // --- convert image ====
        ofReader.size = item.size; //get the image's size


        var src = e.target.result;
        document.getElementById("filejawaban" + id).innerHTML = src;
        var base64 = e.target.result.replace(/^.*,/, '');
        var typeasal = e.target.result.match(/^.*(?=;)/)[0];
        var typenyaaja = typeasal.replace("data:", "");
        if (typenyaaja.indexOf("image") > -1) {
            tempat.innerHTML = "<img id='image" + id + "' src='" + src + "' style='width:500px; border:1px solid blue; padding:5px; border-radius:10px'/><br/>tipe gambar: " + typenyaaja.split("/")[1];
        } else if (typenyaaja.indexOf("video") > -1) {
            tempat.innerHTML = "<video id='myvideo" + id + "' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video tidak mendukung</video>";
        } else if (typenyaaja.indexOf("audio") > -1) {
            tempat.innerHTML = "<video id='myaudio" + id + "' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video/audio tidak mendukung</video>";
        } else if (typenyaaja.indexOf("wordprocessingml") > -1) {
            tempat.innerHTML = "<i id='taktersedia_" + id + "' class='fa fa-file-word-o w3-xxxlarge' style='font-size:72px'></i><br/> Pratinjau tidak terrsedia ";
            //var idac = id +" "+ src;
            //panci(idac);

        } else if (typenyaaja.indexOf("text") > -1) {
            tempat.innerHTML = "<iframe id='myiframe" + id + "' src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe><br/>tipe file: " + typenyaaja.split("/")[1];
        } else if (typenyaaja.indexOf("pdf") > -1) {
            tempat.innerHTML = "<iframe id='pdfke" + id + "' src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe><br/>tipe file: " + typenyaaja.split("/")[1];
        } else {
            tempat.innerHTML = "<i id='takdikenal_" + id + "'  class='fa fa-file-o w3-xxxlarge' style='font-size:72px'></i><br/> File Tidak dikenal <br/>tipe file: " + typenyaaja.split("/")[1];;
        }
    }

}

function uploadpototugas(id) {
    var item = document.getElementById("iduploadpototugas" + id).files[0];
    var tempat = document.getElementById("mediapreview" + id);
    tempat.innerHTML = ""
    var ofReader = new FileReader();
    ofReader.readAsDataURL(item);
    var resize_width = "150"
    ofReader.onload = function (e) {
        // --- convert image ====
        ofReader.size = item.size; //get the image's size


        var src = e.target.result;
        document.getElementById("filejawaban" + id).innerHTML = src;
        var base64 = e.target.result.replace(/^.*,/, '');
        var typeasal = e.target.result.match(/^.*(?=;)/)[0];
        var typenyaaja = typeasal.replace("data:", "");
        if (typenyaaja.indexOf("image") > -1) {
            tempat.innerHTML = "<img src='" + src + "' style='width:98%; border:1px solid blue; padding:5px; border-radius:10px'/><br/>tipe gambar: " + typenyaaja.split("/")[1];
        } else if (typenyaaja.indexOf("video") > -1) {
            tempat.innerHTML = "<video id='myvideo' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video tidak mendukung</video>";
        } else if (typenyaaja.indexOf("audio") > -1) {
            tempat.innerHTML = "<video id='myvideo' width='350' height='200'  poster='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png' controls><source src='" + src + "' type='" + typenyaaja + "' />Browser Anda tidak mendukung/format video tidak mendukung</video>";
        } else if (typenyaaja.indexOf("wordprocessingml") > -1) {
            tempat.innerHTML = "<i class='fa fa-file-word-o w3-xxxlarge' style='font-size:72px'></i><br/> Pratinjau tidak terrsedia ";
            //var idac = id +" "+ src;
            //panci(idac);

        } else if (typenyaaja.indexOf("text") > -1) {
            tempat.innerHTML = "<iframe src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe>";
        } else if (typenyaaja.indexOf("pdf") > -1) {
            tempat.innerHTML = "<iframe src='" + src + "' type='" + typenyaaja + "' width='98%' height='400'></iframe>";
        } else {
            tempat.innerHTML = "<i class='fa fa-file-o w3-xxxlarge' style='font-size:72px'></i><br/> File Tidak dikenal ";;
        }
    }

}

function tombolketikjawaban(id) {
    //alert("Tombol ketik Jawbaan No " + id)
    var tempatnya = document.getElementById("tomboljawaban" + id)
    tempatnya.innerHTML = "";
    var teksarea = document.createElement("textarea");
    teksarea.setAttribute("class", "filejawaban");
    teksarea.setAttribute("id", "filejawaban" + id);
    teksarea.setAttribute("cols", "30");
    teksarea.setAttribute("rows", "10");
    teksarea.setAttribute("placeholder", "Silakan ketik jawaban essay untuk No. Soal " + id);
    tempatnya.appendChild(teksarea);
    tempatnya.innerHTML += "<br/>Ganti dengan mengupload media:";
    var tombollain = document.createElement("button")
    tombollain.setAttribute("onclick", "tomboluploadjawaban('" + id + "')");
    tombollain.innerHTML = "Upload Jawaban No " + id
    tempatnya.appendChild(tombollain);
    tempatnya.innerHTML += "<sub> dengan memilih cara lain, jawaban yang sudah diketik akan hilang dan diganti dengan jawaban berupa gambar/media yang diunggah</sub>"


}

function tomboluploadjawaban(id) {
    //alert("Tombol Upload Jawbaan No " + id)
    var tempatnya = document.getElementById("tomboljawaban" + id);
    var katajadi = "";
    tempatnya.innerHTML = "";
    //	var divbackground = document.createElement("div");
    //		divbackground.setAttribute("style","background-color:#ffcdc9;padding:10px");
    //		divbackground.innerHTML = "Upload Media(Poto, audio, video, pdf, word/txt, dll) jawaban essay No " + id + " dengan menguploadnya di sini: <br/><br/>";
    //			var labelupload = document.createElement("label");
    //				labelupload.setAttribute("style", "border:1px solid black;background-color:#eee;padding:5px;border-radius:5px");
    //				labelupload.setAttribute("for",

    katajadi += "<div style='background-color:#ffcdc9;padding:10px'>Upload Media(Poto, audio, video, pdf, word/txt, dll) jawaban essay No";
    katajadi += " " + id + " dengan menguploadnya di sini: <br/><br/>";
    katajadi += "<label style='border:1px solid black;background-color:#eee;padding:5px;border-radius:5px' for='iduploadpotoessay" + id + "' id='label" + id + "'><i class='fa fa-camera'></i> Upload Jawaban</label><br/><br/>";
    katajadi += "<div id='filejawaban" + id + "' class='filejawaban' style='overflow-x:auto'>";
    katajadi += "<img src='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png'  style='width:145px;margin:auto;border:1px solid blue'/>";
    katajadi += "</div>";

    katajadi += "<input type='file' id='iduploadpotoessay" + id + "' onchange='uploadpotoessay(" + id + ")' style='display:none'/>"; //<div  id='filejawaban"+indexpotojawaban+"' class='jawabanfile' style='display:none' ></div>"
    katajadi += "</div>";
    //-----------------------------
    katajadi += "<br/>Ganti dengan mengetik jawaban:";
    katajadi += "<button onclick='tombolketikjawaban(" + id + ")'>Ketik Jawaban No. " + id + "</button>";
    katajadi += "<sub> dengan memilih cara lain, jawaban yang sudah  diupload akan hilang dan diganti dengan jawaban berupa ketikan/tulisan</sub>"
    //-----------------------------
    tempatnya.innerHTML = katajadi;
}

function tambahtombolisijawaban() {
    var elEssay = document.getElementsByClassName("soalessay")
    if (elEssay.length !== 0) {
        for (i = 0; i < elEssay.length; i++) {
            var idEl = elEssay[i].getAttribute("id");
            var inidEl = idEl.replace("essay", "");
            var tempattombol = document.getElementById("tomboljawaban" + inidEl);
            var tombolsatu = document.createElement("button");
            tombolsatu.setAttribute("onclick", "tombolketikjawaban('" + inidEl + "')");
            var tekstombolsatu = document.createTextNode("Ketik Jawaban No " + inidEl);
            tombolsatu.appendChild(tekstombolsatu);
            tempattombol.appendChild(tombolsatu);
            tempattombol.innerHTML += "<br/><sub>atau</sub></br/> "
            var tomboldua = document.createElement("button");
            tomboldua.setAttribute("onclick", "tomboluploadjawaban('" + inidEl + "')");
            var tekstomboldua = document.createTextNode("Upload Jawaban No " + inidEl);
            tomboldua.appendChild(tekstomboldua);
            tempattombol.appendChild(tomboldua);
            tempattombol.innerHTML += "<br/><sub>Pilih Salah satu cara Kalian menjawab soal ini</sub>"

        }
    }

}

function ceknilai() {
    //
    tempatinputpilihanganda.innerHTML = "Nama Sekolah: <input name='idsekolah' id='kirimidsekolah' type='text' value='" + keyidSekolah.innerHTML + "'/><br/>";
    tempatinputpilihanganda.innerHTML += "emailguru: <input name='emailguru' id='emailguru' type='text' value='" + keyidemail.innerHTML + "'/><br/>";
    tempatinputpilihanganda.innerHTML += "Nama Kelas : <input name='idkelas' id='kirimidkelas' type='text' value='" + keykelas.innerHTML + "'/><br/>";
    tempatinputpilihanganda.innerHTML += "Mapel : <input name='idmapel' id='kirimidmapel' type='text' value='" + keymapel.innerHTML + "'/><br/>";
    tempatinputpilihanganda.innerHTML += "Token : <input name='idtoken' id='kirimidtoken' type='text' value='" + keyidToken.innerHTML + "'/><br/>";
    tempatinputpilihanganda.innerHTML += "Nama : <input name='namasiswa' id='kirimnamasiswa' type='text' value='" + previewpilihnama.value + "'/><br/>";
    tempatinputpilihanganda.innerHTML += "NIlai PG : <input name='nilaiPG' id='kirimnilaiPG' type='text' value='" + nilaiPGku.innerHTML + "'/><br/>";

    var jumlahsoal = document.getElementsByClassName("calcnosoal");
    var jumlahopsipg = document.getElementsByClassName("calc");
    var kuncijawaban = window.atob(tttkeybase.innerHTML);
    var koleksiceklis = [];
    tempatinputpilihanganda.innerHTML += "Data Pilihan Ganda:<br/>"
    for (var i = 0; i < jumlahopsipg.length; i++) {
        if (jumlahopsipg[i].checked) {
            var idopsi = jumlahopsipg[i].getAttribute("id").replace(/\s+/g, "");
            koleksiceklis.push(idopsi)
        }
    }
    //koleksiceklis = kuncijawaban.replace("/\s+/g","").split(",").join("=");
    //cektagihan.innerHTML = koleksiceklis.join("<br/>");
    //cektagihan.innerHTML +="<hr/>" + kuncijawaban ; //.split(",")
    //cektagihan.innerHTML  += "<hr/> Ini hasil koreksinya:<br/>";
    for (j = 0; j < koleksiceklis.length; j++) {
        //cektagihan.innerHTML += koleksiceklis[j] +" = " + PGBenar(kuncijawaban, koleksiceklis[j]) +"<br/>"
        tempatinputpilihanganda.innerHTML += "No. " + parseInt(koleksiceklis[j]) + " <input type='text' name='PG_" + parseInt(koleksiceklis[j]) + "' value='" + koleksiceklis[j].replace(parseInt(koleksiceklis[j]), "") + "'/><br/>"
    }

    for (k = 0; k < koleksiceklis.length; k++) {
        var skor = (PGBenar(kuncijawaban, koleksiceklis[k]) == "Benar") ? 1 : 0;
        //cektagihan.innerHTML += koleksiceklis[j] +" = " + PGBenar(kuncijawaban, koleksiceklis[j]) +"<br/>"
        tempatinputpilihanganda.innerHTML += "Skor No. " + parseInt(koleksiceklis[k]) + " <input type='text' name='SKOR_" + parseInt(koleksiceklis[k]) + "' value='" + skor + "'/><br/>"
    }


}

function ceknilaiaksessekali() {
    var jumlahsoal = document.getElementsByClassName("calcnosoal");
    var jumlahopsipg = document.getElementsByClassName("calc");
    var kuncijawaban = window.atob(tttkeybase.innerHTML);
    var koleksiceklis = [];
    tempatinputpilihanganda.innerHTML = "Data Pilihan Ganda:<br/>"
    for (var i = 0; i < jumlahopsipg.length; i++) {
        if (jumlahopsipg[i].checked) {
            var idopsi = jumlahopsipg[i].getAttribute("id").replace(/\s+/g, "");
            koleksiceklis.push(idopsi)
        }
    }
    //koleksiceklis = kuncijawaban.replace("/\s+/g","").split(",").join("=");
    cektagihan.innerHTML = koleksiceklis.join("<br/>");
    cektagihan.innerHTML += "<hr/>" + kuncijawaban; //.split(",")
    cektagihan.innerHTML += "<hr/> Ini hasil koreksinya:<br/>";
    for (j = 0; j < koleksiceklis.length; j++) {
        cektagihan.innerHTML += koleksiceklis[j] + " = " + PGBenar(kuncijawaban, koleksiceklis[j]) + "<br/>"
        tempatinputpilihanganda.innerHTML += "No. " + parseInt(koleksiceklis[j]) + " <input type='text' name='PG_" + parseInt(koleksiceklis[j]) + "' value='" + koleksiceklis[j].replace(parseInt(koleksiceklis[j]), "") + "'/><br/>"
    }

    var koleksigambarjawaban = document.getElementsByClassName("filejawaban");
    tempatinputjawabanessay.innerHTML = "Data Poto Essay:<br/>"
    for (var i = 0; i < koleksigambarjawaban.length; i++) {
        var dataupload = koleksigambarjawaban[i].innerHTML;
        //if(dataupload.length > -1){
        //if(dataupload.length !== ""){
        if (dataupload !== "") {
            var base64 = dataupload.replace(/^.*,/, '');
            var typeasal = dataupload.match(/^.*(?=;)/)[0];
            var typenyaaja = typeasal.replace("data:", "");
            var inputbase64 = document.createElement("input");
            inputbase64.setAttribute("value", base64);
            inputbase64.setAttribute("name", "data");
            var inputtype = document.createElement("input");
            inputtype.setAttribute("value", typeasal);
            inputtype.setAttribute("name", "mimetype");
            var inputfilename = document.createElement("input");
            inputfilename.setAttribute("value", "Poto Essay ke-" + (i + 1));
            inputfilename.setAttribute("name", "filename");
            tempatinputjawabanessay.innerHTML += "<br/>Poto Ke-" + (i + 1);
            tempatinputjawabanessay.appendChild(inputbase64);
            tempatinputjawabanessay.appendChild(inputtype);
            tempatinputjawabanessay.appendChild(inputfilename);
        }
    }

}

function PGBenar(opsi, kuncijawaban) {
    var benarsalah;
    if (opsi.indexOf(kuncijawaban) > -1) {
        benarsalah = "Benar"
    } else {
        benarsalah = "Salah"
    }
    return benarsalah
}

function mulaibelajar() {
    materiimport.style.display = "block";
    previewloginsiswa.style.display = "none";
    tes.style.display = "block";
    hasilakhir.style.display = "none";
    materiimport.innerHTML = "<i class='fa fa-spin fa-spinner w3-xxxlarge'  ></i>";
    //bikin judul h4
    var judul = document.createElement("h4")
    judul.setAttribute("class", "w3-center");
    judul.innerHTML = "Identitas e-Lamaso";
    tes.innerHTML = ""
    tes.appendChild(judul);

    //-- Bikin Tabel identitas:
    var tabelidentitas = document.createElement("table");
    tabelidentitas.setAttribute("class", "versi-table");
    tabelidentitas.setAttribute("style", "margin:auto");
    var tr = tabelidentitas.insertRow(-1);
    var td = tr.insertCell(-1);
    td.innerHTML = "ID Token"
    var td = tr.insertCell(-1);
    td.innerHTML = keyidToken.innerHTML;
    var tr = tabelidentitas.insertRow(-1);
    var td = tr.insertCell(-1);
    td.innerHTML = "Sekolah"
    var td = tr.insertCell(-1);
    td.innerHTML = keyidSekolah.innerHTML;
    var tr = tabelidentitas.insertRow(-1);
    var td = tr.insertCell(-1);
    td.innerHTML = "Nama Siswa"
    var td = tr.insertCell(-1);
    td.innerHTML = previewpilihnama.value;
    var tr = tabelidentitas.insertRow(-1);
    var td = tr.insertCell(-1);
    td.innerHTML = "Kelas"
    var td = tr.insertCell(-1);
    td.innerHTML = keykelas.innerHTML;
    var tr = tabelidentitas.insertRow(-1);
    var td = tr.insertCell(-1);
    td.innerHTML = "Mapel/Tema"
    var td = tr.insertCell(-1);
    td.innerHTML = keymapel.innerHTML;
    var tr = tabelidentitas.insertRow(-1);
    var td = tr.insertCell(-1);
    td.innerHTML = "Frekuensi Akses"
    var td = tr.insertCell(-1);
    var keteranganakses;;
    if (keyaksessiswa.innerHTML == "sekali") {
        keteranganakses = "Sekali saja sejak mengirim nilai"
    } else {
        keteranganakses = "Berapa kali saja untuk latihan"
    }
    td.innerHTML = keteranganakses;
    var tr = tabelidentitas.insertRow(-1);
    var td = tr.insertCell(-1);
    td.innerHTML = "Tanggal Publikasi"
    var td = tr.insertCell(-1);
    td.innerHTML = formattanggallengkap(keypublikasi.innerHTML);

    var tr = tabelidentitas.insertRow(-1);
    var cel1 = tr.insertCell(-1);
    cel1.setAttribute("id", "timer");
    cel1.setAttribute("colspan", "2");
    cel1.setAttribute("style", "text-align:center");
    cel1.innerHTML = "Timer: ";
    var cdtimer = document.createElement("input")
    cdtimer.setAttribute("id", "cd_seconds");
    cdtimer.setAttribute("disabled", "true");
    cdtimer.setAttribute("value", keydurasi.innerHTML);
    cdtimer.setAttribute("style", "width:50px")
    cel1.appendChild(cdtimer);
    cel1.innerHTML += " Menit."
    var tr = tabelidentitas.insertRow(-1);
    var cel1 = tr.insertCell(-1);
    cel1.setAttribute("id", "tempatdurasi");
    cel1.setAttribute("colspan", "2");
    cel1.setAttribute("style", "text-align:center");
    var cdstatus = document.createElement("b");
    cdstatus.setAttribute("id", "cd_status");
    var tekscdstatus = document.createTextNode("Durasi Penyelesaian:");
    cdstatus.appendChild(tekscdstatus);
    var cdjam = document.createElement("span");
    cdjam.setAttribute("id", "cd_h");
    var tekscdjam = document.createTextNode("00:");
    cdjam.appendChild(tekscdjam);
    var cdmenit = document.createElement("span");
    cdmenit.setAttribute("id", "cd_m");
    var tekscdmenit = document.createTextNode("00:");
    cdmenit.appendChild(tekscdmenit);
    var cddetik = document.createElement("span");
    cddetik.setAttribute("id", "cd_s");
    var tekscddetik = document.createTextNode("00");
    cddetik.appendChild(tekscddetik);
    var cdpause = document.createElement("input")
    cdpause.setAttribute("type", "button");
    cdpause.setAttribute("id", "cd_pause");
    cdpause.setAttribute("value", "Jeda");
    var cdpstop = document.createElement("input")
    cdpstop.setAttribute("type", "button");
    cdpstop.setAttribute("id", "cd_stop");
    cdpstop.setAttribute("value", "Selesai");
    var gntibaris = document.createElement("br");
    var controltimer = document.createElement("b")
    var tekscontroltimer = document.createTextNode("Control Timer:");
    controltimer.appendChild(tekscontroltimer);
    var controlstart = document.createElement("input");
    controlstart.setAttribute("type", "button");
    controlstart.setAttribute("id", "cd_start");
    controlstart.setAttribute("value", "Mulai Mengerjakan");
    var controlreset = document.createElement("input");
    controlreset.setAttribute("type", "button");
    controlreset.setAttribute("id", "cd_reset");
    controlreset.setAttribute("value", "Reset Timer");
    var titikdua = document.createElement("b");
    var tekstitikdua = document.createTextNode(":");
    titikdua.appendChild(tekstitikdua);
    cel1.appendChild(controltimer);
    cel1.innerHTML += "<br/>";
    cel1.appendChild(controlstart);
    //cel1.appendChild(controlreset);
    //cel1.appendChild(cdpause);
    cel1.appendChild(cdpstop);
    cel1.appendChild(gntibaris);
    cel1.appendChild(cdstatus);
    cel1.innerHTML += ":<br/>";
    cel1.appendChild(cdjam);
    cel1.innerHTML += ":";
    cel1.appendChild(cdmenit);
    cel1.appendChild(titikdua)
    cel1.appendChild(cddetik);

    tes.appendChild(tabelidentitas)

    var usersekolah = keysekolah.innerHTML
    var alt_url;
    if (usersekolah == "SDN Ratujaya 1") {
        alt_url = script_url;
    } else {
        alt_url = script_url2;
    }

    //panggil jsonmateri:
    var id = keyidmateri.innerHTML;
    var idm = encodeURIComponent(id);
    var en = "idmateri=" + idm;
    //var url = script_url + "?" + en + "&action=previewriwayat";
    var url = alt_url + "?" + en + "&action=previewriwayat";


    $.getJSON(url, function (json) {
        //$("#output").html(brkline(json))
        //document.getElementById("isipetunjuk").innerHTML = brkline(json);
        materiimport.innerHTML = brkline(json);
        $.APP.startTimer('cd');
        tambahtombolisijawaban();
        var adaselini = document.getElementById("selwaktumulai");
        if (adaselini == null) {
            var tabel = document.getElementById("tabelku");
            var brs = tabel.insertRow(4);
            var sel = brs.insertCell(-1);
            sel.setAttribute("id", "selwaktumulai");
            sel.innerHTML = "Waktu Mulai";
            var sel = brs.insertCell(-1);
            sel.innerHTML = waktusekarang();
        }

        var adadivngambang = document.getElementById("selesaingambang");
        if (adadivngambang == null) {
            var divngambang = document.createElement("div");
            divngambang.setAttribute("id", "selesaingambang");
            divngambang.setAttribute("style", "border:1px solid black;width:50%;top:46px;text-align:center;position:fixed;cursor:pointer;left:10%;background-color:black;color:white;");
            divngambang.innerHTML = "<i class='fa fa-clock-o'></i>  Belajar Selesai";
            materiimport.appendChild(divngambang);
        }

    })

    ///--- Kondisi untuk menampilkan hasil belajar  ------////
    // Kondisi awal, dihidden



    //cektugasdansoal();



}

function cektugasdansoal() {
    //Cek nosoalPG
    var nosoal = document.getElementsByClassName("calcnosoal");
    var opsiclac = document.getElementsByClassName("calc");
    var essayclac = document.getElementsByClassName("soalessay");
    cektagihan.innerHTML = "Jumlah soal PG: " + nosoal.length + " butir soal. <hr style='border-top:1px solid blue'/>";
    // ---------- Cek No soal Duplikat
    var koleksnosoal = [];
    var nosoalduplikat = [];
    for (var a = 0; a < nosoal.length; a++) {
        if (koleksnosoal.indexOf(nosoal[a].getAttribute("id")) < 0) {
            koleksnosoal.push(nosoal[a].getAttribute("id"));
        } else {
            nosoalduplikat.push(nosoal[a].getAttribute("id"))
        }
    }

    //----------- Beri Keterangan No soal yang duplikat 
    var infonosoalduplikat = "";
    if (nosoalduplikat.length > 0 && nosoal.length > 0) {
        infonosoalduplikat = "Penulisan Kode No Soal: <span style='color:red'>Kode Nomor Soal PG yang duplikat, yaitu No : (" + nosoalduplikat.join(', ') + "), segera perbaiki sumber materi Anda agar e-Lamaso mampu membaca nilai yang diperoleh siswa. </span> "
    } else if (nosoalduplikat.length == 0 && nosoal.length > 0) {
        infonosoalduplikat = "Penulisan Kode No Soal: <span style='color:blue'>Bagus, tidak ada kode Nomor Soal yang duplikat.</span>"
    } else {
        infonosoalduplikat = "";
    }

    // ---------- Cek Kode Opsi Duplikat

    //----------- Beri Keterangan Kode ID yang duplikat 
    var opsiduplikat = [];
    var koleksiduplikat = [];
    for (x = 0; x < opsiclac.length; x++) {
        //cektagihan.innerHTML += opsiclac[x].getAttribute("id") + "<br>";
        if (opsiduplikat.indexOf(opsiclac[x].getAttribute("id")) < 0) {
            var hapusspasi = opsiclac[x].getAttribute("id").replace(/\s+/g, "")
            opsiduplikat.push(hapusspasi)
        } else {
            var hapusspasi = opsiclac[x].getAttribute("id").replace(/\s+/g, "")
            koleksiduplikat.push(hapusspasi)
        }

    }


    //cektagihan.innerHTML += "Jumlah Koleksi Opsijawaban: " + opsiduplikat.length +" ("+opsiduplikat+"), dan jumlah opsi duplikat: " + koleksiduplikat.length +" ("+koleksiduplikat+")<br/>";

    var infoteksduplikat = ""; // opsi pilihan ganda yang duplikat
    if (koleksiduplikat.length > 0 && nosoal.length > 0) {
        infoteksduplikat = "Penulisan Kode Opsion Pilihan Ganda : <span style='color:red'>Kode ID opsion PG duplikat, opsion : (" + koleksiduplikat.join(', ') + "), ini akan mempengaruhi nilai siswa.</span> "
    } else if (koleksiduplikat.length == 0 && nosoal.length > 0) {
        infoteksduplikat = "Penulisan Kode Opsion Pilihan Ganda : <span style='color:blue'>Bagus, tidak ditemukan kode ID opsion jawaban PG duplikat.</span>"
    } else {
        infoteksduplikat = "<hr style='border-top:1px solid blue'>"
    }
    cektagihan.innerHTML += infonosoalduplikat + "<br/>" + infoteksduplikat;

    cektagihan.innerHTML += "<hr style='border-top:1px solid blue'> Jumlah Soal Essay : " + essayclac.length + " Soal. ";
    //===============
    var essayduplikat = [];
    var koleksiessayduplikat = [];
    for (x = 0; x < essayclac.length; x++) {
        //cektagihan.innerHTML += opsiclac[x].getAttribute("id") + "<br>";
        if (essayduplikat.indexOf(essayclac[x].getAttribute("id")) < 0) {
            var hapusspasi = essayclac[x].getAttribute("id").replace(/\s+/g, "")
            essayduplikat.push(hapusspasi)
        } else {
            var hapusspasi = essayclac[x].getAttribute("id")
            koleksiessayduplikat.push(hapusspasi)
        }

    }
    //cektagihan.innerHTML += "Jumlah Koleksi Essay: " + essayduplikat.length +" ("+essayduplikat.join(', ')+"), dan jumlah essay duplikat: " + koleksiessayduplikat.length +" ("+koleksiessayduplikat.join(', ')+")<br/>";
    if (koleksiessayduplikat.length == 0 && essayclac.length > 0) {
        cektagihan.innerHTML += "<span style='color:blue'> (tidak ditemukan nomor soal essay duplikat)</span><hr style='border-top:1px solid blue'>"
    } else if (koleksiessayduplikat.length > 0 && essayclac.length > 0) {
        cektagihan.innerHTML += "<span style='color:red'> Nomor Essay Duplikat = " + koleksiessayduplikat.join(', ') + "</span><hr style='border-top:1px solid blue'>";
    } else {
        cektagihan.innerHTML += "";
    }
    //===============
    var potoessayjawaban = document.getElementsByClassName("potoessay");
    cektagihan.innerHTML += "Jumlah Tombol Upload untuk essay ada : " + potoessayjawaban.length + " buah.<br/>";
    for (y = 0; y < potoessayjawaban.length; y++) {
        cektagihan.innerHTML += "Tombol Upload (Poto/Media) ke-" + (y + 1) + " untuk No: "
        var nosoalpotoini = potoessayjawaban[y].getAttribute("id").split("/");
        for (z = 0; z < nosoalpotoini.length; z++) {
            cektagihan.innerHTML += nosoalpotoini[z] + ", "
        }
        cektagihan.innerHTML += "<br/>"
    }
    cektagihan.innerHTML += "<hr style='border-top:1px solid red'/>";
    var keybase = tttkeybase.innerHTML
    if (keybase.length > 0) {
        var kuncijawaban = window.atob(keybase);
        cektagihan.innerHTML += "Kode Kunci Jawaban:  <b><em>" + keybase + "</em></b>, translate Kode Kunci Jawaban =" + kuncijawaban + "<hr style='border-top:1px solid red'/>";
    } else {
        cektagihan.innerHTML += "Tidak ditemukan kunci jawaban <hr style='border-top:1px solid red'/>";
    }
}

function waktuhabis() {
    var sekalisaja = keyaksessiswa.innerHTML;
    if (sekalisaja == "sekali") {

        document.formkirim.style.display = "none";
    } else {
        document.formkirim.style.display = "block";
    }

}

function formattanggallengkap(xxx) {
    // misal idtoken = 01092020
    var idtoken = xxx;
    var namabulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var tgl = idtoken.slice(0, 2); // 01
    var bulan = deleteZero(idtoken.slice(2, 4)); // 09 --> 9, kalo 10 ya tetep 10
    var tahun = idtoken.slice(4, 8)

    return tgl + " " + namabulan[bulan - 1] + " " + tahun + " Pukul 07:00 WIB";

}

function aksessekalidijson() {
    var usersekolah = keysekolah.innerHTML
    var alt_url;
    if (usersekolah == "SDN Ratujaya 1") {
        alt_url = script_url;
    } else {
        alt_url = script_url2;
    }

    var url = alt_url + "?action=datasiswasudahmengerjakan";
    if (keyaksessiswa.innerHTML == "sekali") {
        cekkerjaansiswa.innerHTML = "<i class='fa fa-spin fa-spinner'></i>";
        var kodetoken = keyidToken.innerHTML;
        var kodemapel = keymapel.innerHTML;
        var kodekelas = keykelas.innerHTML;
        var kodenamasiswa = previewpilihnama.value;
        var cek = "";
        var waktu = ""
        $.getJSON(url, function (json) {
            for (a in json.records) {
                if (json.records[a].idtoken == kodetoken && json.records[a].idkelas == kodekelas && json.records[a].idmapel == kodemapel && json.records[a].namasiswa == kodenamasiswa) {
                    cek = "Sudah";
                    waktu = json.records[a].Time_Stamp;
                    break;
                } else {
                    cek = "Belum"
                    waktu = ""
                }
            }


            if (cek == "Sudah") {
                cekkerjaansiswa.innerHTML = "Maaf, Ananda sudah mengerjakan ini " + new Date(waktu).toLocaleString();
                timermulai.style.display = "none";

            } else {
                cekkerjaansiswa.innerHTML = "Ananda belum mengerjakan ini " + waktu;
                timermulai.style.display = "block";
            }
        })
    } else {
        timermulai.style.display = "block"
    }

}

function previewriwayat(id) { //ga kepake
    //document.getElementById("output").innerHTML="<i class='fa fa-spin fa-spinner'></i>";
    document.getElementById('modalpetunjuk').style.display = 'block';
    document.getElementById("judulpetunjuk").innerHTML = "<i class='fa fa-spin fa-spinner'></i>";

    var usersekolah = keysekolah.innerHTML
    var alt_url;
    if (usersekolah == "SDN Ratujaya 1") {
        alt_url = script_url;
    } else {
        alt_url = script_url2;
    }

    var idm = encodeURIComponent(id);
    var en = "idmateri=" + idm;
    var url = alt_url + "?" + en + "&action=previewriwayat";

    $.getJSON(url, function (json) {
        //$("#output").html(brkline(json))
        document.getElementById("judulpetunjuk").innerHTML = "Preview e-Lamaso";
        document.getElementById("isipetunjuk").innerHTML = brkline(json);
    })

}

function brkline(teks) { //coba
    var tek = teks.split("\r\n"); //cari sKetiap ganti baris;
    var inn = "";
    var indexpotojawaban = 0;
    var kodeganti = ["_JUDUL_", "_PECAHAN BIASA_"];

    var keypg = document.getElementById("keypg");
    if (keypg == null) {
        var scrippg = document.createElement("script");
        scrippg.setAttribute("id", "keypg");
        scrippg.innerHTML = "var keybase=''";
        tttkeybase.innerHTML = "";

        document.body.appendChild(scrippg);

    } else {
        keypg.innerHTML = "var keybase=''";
        tttkeybase.innerHTML = "";
    }

    for (x = 0; x < tek.length; x++) {
        var asal = tek[x]; // dalam satu baris ini, misal baris pertama:
        var cJudul = jumlahdobel(asal, "_JUDUL_");
        var cGambar = jumlahdobel(asal, "_GAMBAR_");
        var cPecBiasa = jumlahdobel(asal, "_PECAHAN-BIASA_");
        var cPecCamp = jumlahdobel(asal, "_PECAHAN-CAMPURAN_");


        //inn += "ke-"+ x +" = " + asal + "<hr style='border-bottom:1px solid red'/>";
        //inn += "ke-"+ x + " = JUDUL = " + cJudul +", GAMBAR = " + cGambar +", Pecahan Biasa = " + cPecBiasa +", Pecahan Campuran = " + cPecCamp + "<hr style='border-bottom:1px solid blue'/>";
        var katajadi = "";

        if (asal.indexOf("_JUDUL_") > -1) {
            var hJudul;
            var arjud = asal.split("_JUDUL_");
            var katakonversi;
            for (jd in arjud) {
                if (jd > 0) {
                    katakonversi = katajadireplace(arjud[jd]);
                    //hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
                    hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + katakonversi + "</h4>";
                    //katajadi += hJudul ;
                    katajadi += hJudul + "<br/>";
                }
            }
        } else if (asal.indexOf("_ESSAY-NO_") > -1) {
            var esayno = asal.split("_ESSAY-NO_")[0];
            var tekspisah = asal.replace("_ESSAY-NO_", "").split(" ");
            katajadi += "<ol style='list-style-type:decimal' start='" + tekspisah[0] + "'><li id='essay" + tekspisah[0] + "' class='soalessay' style='border-bottom:1px solid blue'><div id='pertanyaanessay_" + tekspisah[0] + "'>";
            for (es in tekspisah) {
                if (es > 0) {
                    katajadi += katajadireplace(tekspisah[es]);
                }
            }


            katajadi += "</div><div id='tomboljawaban" + tekspisah[0] + "'><hr/></div>"
            katajadi += "<br/></li></ol>"
        } else if (asal.indexOf("_START-TABEL_") > -1) {
            katajadi += asal.replace("_START-TABEL_", "<div style='overflow-x:auto'><table class='versi-table'>");
            //katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
        } else if (asal.indexOf("_START-TABEL-OPSI_") > -1) {
            katajadi += asal.replace("_START-TABEL-OPSI_", "<hr style='border-top:1px solid olive'/><div style='overflow-x:auto'><table class='versi-table'>");
            //katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
        } else if (asal.indexOf("<|HEADER|>") > -1) {
            katajadi += "<tr>";
            var tekarray = asal.split("<|HEADER|>");
            var katakonversi;
            for (th in tekarray) {
                katakonversi = katajadireplace(tekarray[th]);
                //katajadi +="<th>" + tekarray[th] +"</th>";
                katajadi += "<th>" + katakonversi + "</th>";
            }
            katajadi += "</tr>"
        } else if (asal.indexOf("<|>") > -1) {
            katajadi += "<tr>";
            var tekarray = asal.split("<|>");
            var katakonversi;
            for (td in tekarray) {
                katakonversi = katajadireplace(tekarray[td]);
                katajadi += "<td>" + katakonversi + "</td>"
            }
            katajadi += "</tr>"
            //inn +=  "<table class='versi-table'>";
        } else if (asal.indexOf("_SELESAI-TABEL_") > -1) {
            katajadi += "</table></div><br/>";
            //katajadi +=  "</table><br/>";

        } else if (asal.indexOf("_SELESAI-TABEL-OPSI_") > -1) {
            //katajadi +=  "</table></div><br/>";
            katajadi += "</table><br/></li></ol>";

        } else if (asal.indexOf("_PG_") > -1) {
            var Q_PG = "";
            var teks = asal.replace("_PG_", ""); // return = 1 teks pertanyaaan bla bla bla
            var arrTeks = teks.split(" ");
            nosoal = arrTeks[0];
            Q_PG += "<ol style='list-style-type:decimal;margin:5px 5px 0px 30px;padding:0' start='" + nosoal + "'><li id='soalke-" + nosoal + "' class='calcnosoal' style='border-top:1px double blue'>";
            var katakonversi;
            for (ss in arrTeks) {
                if (ss > 0) {
                    katakonversi = katajadireplace(arrTeks[ss]);
                    Q_PG += katakonversi;
                }
            }
            //katajadi = Q_PG + "<hr style='border-top:1px solid olive'/>";
            katajadi = Q_PG

        } else if (asal.indexOf("_OPSI-PG_") > -1) {
            var opsipg = "";
            var arpgg = asal.replace("_OPSI-PG_", ""); // hasilnya: 1A teks pertanyaan bla bla bla
            var arpg = arpgg.split(" "); //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
            var idopsi = arpg[0]; // hasilnya: 1A
            //var abjad = idopsi.slice(1, 2); // hasilnya A
            //var nosoal = idopsi.slice(0, 1); // hasilnya 1
            var nosoal = parseInt(idopsi);
            var abjad = idopsi.replace(nosoal, "");

            if (abjad === "A") {
                opsipg += "<hr style='border-top:1px solid olive'/>";
                opsipg += "<ol style='list-style-type:upper-alpha;margin:5px 5px 0px 20px;padding:0' ><li><input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + idopsi + "'/><label class='opsi' for='" + idopsi + "'>"; // Khusus opsi A, ada elemen OL lalu dilanjut teksnya
            } else {
                opsipg += "<li><input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + idopsi + "'/><label class='opsi' for='" + idopsi + "'>"; // selain opsi A, dilanjut.  Tapi tanpa element OL
            }
            var katakonversi;
            for (tt in arpg) { //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
                if (tt > 0) { // hindari array 0=1A
                    katakonversi = katajadireplace(arpg[tt]);
                    //hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
                    opsipg += katakonversi
                }
            }
            if (abjad === "D") {
                opsipg += "</label></li></ol></li></ol>";
            } else {
                opsipg += "</label></li>";
            }


            katajadi += opsipg;

        } else if (asal.indexOf("_POTO-JAWABAN-TUGAS_") > -1) {
            var tekssplit = asal.replace("_POTO-JAWABAN-TUGAS_", "").split(" ")[0]; // return: 1/2/3
            var mediaessay = "";
            var bnyk = tekssplit.split("/");
            for (de in bnyk) {
                mediaessay += bnyk[de] + ", ";
            }
            katajadi += "<div style='background-color:#ffcdc9;padding:10px'>Upload Media(Poto, audio, video, pdf, word/txt, dll) jawaban Tugas No";
            katajadi += " " + mediaessay + " dengan menguploadnya di sini: <br/><br/>";
            katajadi += "<label style='border:1px solid black;background-color:#eee;padding:5px;border-radius:5px' for='iduploadpototugas" + indexpotojawaban + "' id='label" + indexpotojawaban + "'><i class='fa fa-camera'></i> Upload Jawaban</label><br/><br/>";
            katajadi += "<div class='potoessay' id='" + tekssplit + "' style='overflow-x:auto'><div id='mediapreview" + indexpotojawaban + "'>";
            katajadi += "<img src='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png'  style='width:145px;margin:auto;border:1px solid blue'/>";
            katajadi += "</div></div>";

            katajadi += "<input type='file' id='iduploadpototugas" + indexpotojawaban + "' onchange='uploadpototugas(" + indexpotojawaban + ")' style='display:none'/><div  id='filejawaban" + indexpotojawaban + "' class='jawabanfile' style='display:none' ></div>"


            katajadi += "</div>";

            indexpotojawaban += 1;


        } else if (asal.indexOf("_KUNCI-PG_") > -1) {
            //REPLACE DULU = misal: _KUNCI-PG_1A, 2B, 3C<kalo adaspasi>
            var tekskunci = asal.replace("_KUNCI-PG_", "").replace(/\s+/g, "").split(","); // hasilnya: 1A,2B,3C
            var arrkunci = [];
            for (o = 0; o < tekskunci.length; o++) {
                arrkunci.push(tekskunci[o])
            }
            basekunci = window.btoa(arrkunci);
            //basekunci = arrkunci;//window.btoa(arrkunci);
            var keypg = document.getElementById("keypg");

            //var teksscript = document.createTextNode("var keybase='"+basekunci+"'");
            //	keypg.appendChild(teksscript);
            keypg.innerHTML = "var keybase='" + basekunci + "'";
            tttkeybase.innerHTML = basekunci;
        } else {
            var katakonversi = katajadireplace(asal);
            katajadi += katakonversi + "<br/>";

        }
        inn += katajadi; //+ "&lt;br/&gt;" ;
    }


    return inn
}

function brklinelama(teks) { //coba
    var tek = teks.split("\r\n"); //cari sKetiap ganti baris;
    var inn = "";
    var indexpotojawaban = 0;
    var kodeganti = ["_JUDUL_", "_PECAHAN BIASA_"];

    var keypg = document.getElementById("keypg");
    if (keypg == null) {
        var scrippg = document.createElement("script");
        scrippg.setAttribute("id", "keypg");
        scrippg.innerHTML = "var keybase=''";
        tttkeybase.innerHTML = "";

        document.body.appendChild(scrippg);

    } else {
        keypg.innerHTML = "var keybase=''";
        tttkeybase.innerHTML = "";
    }

    for (x = 0; x < tek.length; x++) {
        var asal = tek[x]; // dalam satu baris ini, misal baris pertama:
        var cJudul = jumlahdobel(asal, "_JUDUL_");
        var cGambar = jumlahdobel(asal, "_GAMBAR_");
        var cPecBiasa = jumlahdobel(asal, "_PECAHAN-BIASA_");
        var cPecCamp = jumlahdobel(asal, "_PECAHAN-CAMPURAN_");


        //inn += "ke-"+ x +" = " + asal + "<hr style='border-bottom:1px solid red'/>";
        //inn += "ke-"+ x + " = JUDUL = " + cJudul +", GAMBAR = " + cGambar +", Pecahan Biasa = " + cPecBiasa +", Pecahan Campuran = " + cPecCamp + "<hr style='border-bottom:1px solid blue'/>";
        var katajadi = "";

        if (asal.indexOf("_JUDUL_") > -1) {
            var hJudul;
            var arjud = asal.split("_JUDUL_");
            var katakonversi;
            for (jd in arjud) {
                if (jd > 0) {
                    katakonversi = katajadireplace(arjud[jd]);
                    //hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
                    hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + katakonversi + "</h4>";
                    //katajadi += hJudul ;
                    katajadi += hJudul + "<br/>";
                }
            }
        } else if (asal.indexOf("_ESSAY-NO_") > -1) {
            var esayno = asal.split("_ESSAY-NO_")[0];
            var tekspisah = asal.replace("_ESSAY-NO_", "").split(" ");
            katajadi += "<ol style='list-style-type:decimal' start='" + tekspisah[0] + "'><li id='essay" + tekspisah[0] + "' class='soalessay' style='border-bottom:1px solid blue'>";
            for (es in tekspisah) {
                if (es > 0) {
                    katajadi += katajadireplace(tekspisah[es]);
                }
            }
            katajadi += "</li></ol>"
        } else if (asal.indexOf("_START-TABEL_") > -1) {
            katajadi += asal.replace("_START-TABEL_", "<div style='overflow-x:auto'><table class='versi-table'>");
            //katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
        } else if (asal.indexOf("_START-TABEL-OPSI_") > -1) {
            katajadi += asal.replace("_START-TABEL-OPSI_", "<hr style='border-top:1px solid olive'/><div style='overflow-x:auto'><table class='versi-table'>");
            //katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
        } else if (asal.indexOf("<|HEADER|>") > -1) {
            katajadi += "<tr>";
            var tekarray = asal.split("<|HEADER|>");
            var katakonversi;
            for (th in tekarray) {
                katakonversi = katajadireplace(tekarray[th]);
                //katajadi +="<th>" + tekarray[th] +"</th>";
                katajadi += "<th>" + katakonversi + "</th>";
            }
            katajadi += "</tr>"
        } else if (asal.indexOf("<|>") > -1) {
            katajadi += "<tr>";
            var tekarray = asal.split("<|>");
            var katakonversi;
            for (td in tekarray) {
                katakonversi = katajadireplace(tekarray[td]);
                katajadi += "<td>" + katakonversi + "</td>"
            }
            katajadi += "</tr>"
            //inn +=  "<table class='versi-table'>";
        } else if (asal.indexOf("_SELESAI-TABEL_") > -1) {
            katajadi += "</table></div><br/>";
            //katajadi +=  "</table><br/>";

        } else if (asal.indexOf("_SELESAI-TABEL-OPSI_") > -1) {
            //katajadi +=  "</table></div><br/>";
            katajadi += "</table><br/></li></ol>";

        } else if (asal.indexOf("_PG_") > -1) {
            var Q_PG = "";
            var teks = asal.replace("_PG_", ""); // return = 1 teks pertanyaaan bla bla bla
            var arrTeks = teks.split(" ");
            nosoal = arrTeks[0];
            Q_PG += "<ol style='list-style-type:decimal;margin:5px 5px 0px 30px;padding:0' start='" + nosoal + "'><li id='soalke-" + nosoal + "' class='calcnosoal' style='border-top:1px double blue'>";
            var katakonversi;
            for (ss in arrTeks) {
                if (ss > 0) {
                    katakonversi = katajadireplace(arrTeks[ss]);
                    Q_PG += katakonversi;
                }
            }
            //katajadi = Q_PG + "<hr style='border-top:1px solid olive'/>";
            katajadi = Q_PG

        } else if (asal.indexOf("_OPSI-PG_") > -1) {
            var opsipg = "";
            var arpgg = asal.replace("_OPSI-PG_", ""); // hasilnya: 1A teks pertanyaan bla bla bla
            var arpg = arpgg.split(" "); //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
            var idopsi = arpg[0]; // hasilnya: 1A
            var abjad = idopsi.slice(1, 2); // hasilnya A
            var nosoal = idopsi.slice(0, 1); // hasilnya 1
            if (abjad === "A") {
                opsipg += "<hr style='border-top:1px solid olive'/>";
                opsipg += "<ol style='list-style-type:upper-alpha;margin:5px 5px 0px 20px;padding:0' ><li><input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + idopsi + "'/><label class='opsi' for='" + idopsi + "'>"; // Khusus opsi A, ada elemen OL lalu dilanjut teksnya
            } else {
                opsipg += "<li><input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + idopsi + "'/><label class='opsi' for='" + idopsi + "'>"; // selain opsi A, dilanjut.  Tapi tanpa element OL
            }
            var katakonversi;
            for (tt in arpg) { //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
                if (tt > 0) { // hindari array 0=1A
                    katakonversi = katajadireplace(arpg[tt]);
                    //hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
                    opsipg += katakonversi
                }
            }
            if (abjad === "D") {
                opsipg += "</label></li></ol></li></ol>";
            } else {
                opsipg += "</label></li>";
            }


            katajadi += opsipg;

        } else if (asal.indexOf("_POTO-JAWABAN-ESSAY_") > -1) {
            var tekssplit = asal.replace("_POTO-JAWABAN-ESSAY_", "").split(" ")[0]; // return: 1/2/3
            var mediaessay = "";
            var bnyk = tekssplit.split("/");
            for (de in bnyk) {
                mediaessay += bnyk[de] + ", ";
            }
            katajadi += "<div style='background-color:#ffcdc9;padding:10px'>Upload Media(Poto, audio, video, pdf, word/txt, dll) jawaban essay No";
            katajadi += " " + mediaessay + " dengan menguploadnya di sini: <br/><br/>";
            katajadi += "<label style='border:1px solid black;background-color:#eee;padding:5px;border-radius:5px' for='iduploadpotoessay" + indexpotojawaban + "' id='label" + indexpotojawaban + "'><i class='fa fa-camera'></i> Upload Jawaban</label><br/><br/>";
            katajadi += "<div class='potoessay' id='" + tekssplit + "' style='overflow-x:auto'><div id='mediapreview" + indexpotojawaban + "'>";
            katajadi += "<img src='https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png'  style='width:145px;margin:auto;border:1px solid blue'/>";
            katajadi += "</div></div>";

            katajadi += "<input type='file' id='iduploadpotoessay" + indexpotojawaban + "' onchange='uploadpotoessay(" + indexpotojawaban + ")' style='display:none'/><div  id='filejawaban" + indexpotojawaban + "' class='jawabanfile' style='display:none' ></div>"


            katajadi += "</div>";

            indexpotojawaban += 1;


        } else if (asal.indexOf("_KUNCI-PG_") > -1) {
            //REPLACE DULU = misal: _KUNCI-PG_1A, 2B, 3C<kalo adaspasi>
            var tekskunci = asal.replace("_KUNCI-PG_", "").replace(/\s+/g, "").split(","); // hasilnya: 1A,2B,3C
            var arrkunci = [];
            for (o = 0; o < tekskunci.length; o++) {
                arrkunci.push(tekskunci[o])
            }
            basekunci = window.btoa(arrkunci);
            //basekunci = arrkunci;//window.btoa(arrkunci);
            var keypg = document.getElementById("keypg");

            //var teksscript = document.createTextNode("var keybase='"+basekunci+"'");
            //	keypg.appendChild(teksscript);
            keypg.innerHTML = "var keybase='" + basekunci + "'";
            tttkeybase.innerHTML = basekunci;
        } else {
            var katakonversi = katajadireplace(asal);
            katajadi += katakonversi + "<br/>";

        }
        inn += katajadi; //+ "&lt;br/&gt;" ;
    }


    return inn
}

function katajadireplace(asal) {
    var splitTeks = asal.split(" ");
    var ccJudul = 1;
    var brsTabel = 0;
    var katajadi = "";
    for (i = 0; i < splitTeks.length; i++) {
        //jika judul:
        if (splitTeks[i].indexOf("_GAMBAR_") > -1) {
            katajadi += "<img src='" + splitTeks[i].replace("_GAMBAR_", "") + "' style='width:20%;border:1px solid red;border-radius:5px' alt='tidak muncul, link Anda salah atau ada spasi setelah kode'/>";
        } else if (splitTeks[i].indexOf("_GAMBAR-DRIVE_") > -1) {
            var hilangkankode = splitTeks[i].replace("_GAMBAR-DRIVE_", "");
            var hilangkanprefik = hilangkankode.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=view&id=");
            var hilangkansufik = hilangkanprefik.replace("/view", "");
            var hilangkansufike = hilangkansufik.replace("?usp=drivesdk", "");

            katajadi += "<img src='" + hilangkansufike + "' style='width:20%;border:1px solid red;border-radius:5px' alt='tidak muncul, link Anda salah atau ada spasi setelah kode, contoh link:https://drive.google.com/file/d/1J0NUwTrxFBZ0JZBCzVTlsDFeXbn3mIci/view'/> ";
        } else if (splitTeks[i].indexOf("_PECAHAN-BIASA_") > -1) {
            var a = splitTeks[i].replace("_PECAHAN-BIASA_", "").split("/")[0];
            var b = splitTeks[i].replace("_PECAHAN-BIASA_", "").split("/")[1];
            katajadi += "<img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Cfrac%7B" + a + "%7D%7B" + b + "%7D%20&chf=bg%2Cs%2CFFFFFF100&chco=000000' />"


        } else if (splitTeks[i].indexOf("_PECAHAN-CAMPURAN_") > -1) {
            var a = splitTeks[i].replace("_PECAHAN-CAMPURAN_", "").split("/")[0];
            var b = splitTeks[i].replace("_PECAHAN-CAMPURAN_", "").split("/")[1];
            var c = splitTeks[i].replace("_PECAHAN-CAMPURAN_", "").split("/")[2];
            katajadi += "<img src='https://chart.apis.google.com/chart?cht=tx&chl=" + a + "%5Cfrac%7B" + b + "%7D%7B" + c + "%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' />"


        } else if (splitTeks[i].indexOf("_AKAR-KUADRAT_") > -1) {
            var a = splitTeks[i].replace("_AKAR-KUADRAT_", "");

            katajadi += "<img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Csqrt%7B%20" + a + "%20%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' />"


        } else if (splitTeks[i].indexOf("_AKAR-TIGA_") > -1) {
            var a = splitTeks[i].replace("_AKAR-TIGA_", "");
            katajadi += " <img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Csqrt%5B3%5D%7B%20" + a + "%20%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "


        } else if (splitTeks[i].indexOf("_PANGKAT_") > -1) {
            var a = splitTeks[i].replace("_PANGKAT_", "").split("/")[0];
            var b = splitTeks[i].replace("_PANGKAT_", "").split("/")[1];
            katajadi += " <img src='https://chart.apis.google.com/chart?cht=tx&chl=%5C" + a + "^" + b + "%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "


        } else if (splitTeks[i].indexOf("_EQUATION-LAINNYA_") > -1) {
            var a = splitTeks[i].replace("_EQUATION-LAINNYA_", "");
            var b = decodeURIComponent(a);
            //var c = decodeURIComponent(b);
            katajadi += " <img src='https://chart.apis.google.com/chart?cht=tx&chl=" + b + "%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "


        } else if (splitTeks[i].indexOf("_YOUTUBE_") > -1) {
            var linkyoutube, konv, konv2, konv3;
            konv = splitTeks[i].replace("_YOUTUBE_", "<br/><iframe width='95%' height='215' src='")
            konv2 = konv.replace("https://youtu.be/", "https://www.youtube.com/embed/"); // kalo link awalnya https://youtu.be/ 
            konv3 = konv2.replace("watch?v=", "embed/"); // jika diambil dari https://www.youtube.com/
            linkyoutube = konv3 + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br/>";

            katajadi += linkyoutube;

        } else if (splitTeks[i].indexOf("_OPSI-SEL_") > -1) {
            var splitteks = splitTeks[i].replace("_OPSI-SEL_", "").split(" ");
            var id = splitteks[0]; //4A

            var abjad = id.slice(1, 2); //B
            var nosoal = id.slice(0, 1); //nosoal 4
            var innteks = "<input class='calc' type='radio' style='display:none' name='soal" + nosoal + "' id='" + id + "'/><label class='opsi' for='" + id + "'>" + abjad + "</label>"

            katajadi += innteks;
        } else {
            katajadi += splitTeks[i] + " ";

        }
    }

    return katajadi

}

function jumlahdobel(arrTeks, txt) {
    var count = 0;
    var crtArr = arrTeks.split(" ");
    for (i in crtArr) {
        if (crtArr[i].indexOf(txt) > -1) {
            count += 1
        }
    }

    return count
}

function gantiapaaja(teks, cariapa, gantiawal, gantiakhir) {
    var split = teks.split(cariapa);
    var teksganti = "";
    //for (x in split){
    for (x = 1; x < split.length; x++) {
        if (split[x].length > 0) {
            teksganti += gantiawal + split[x] + gantiakhir;
        }; //.split(" ")[0] +"</h3>";

    }
    return teksganti
}


function kliklamaso() {
    //pertama cek sekolah, kalau token ada huruf A, berarti bukan dari SDN Ratujaya 1
    //token SDN Ratujaya 1
    tes.innerHTML = "<i class='fa fa-spin fa-spinner'></i>";
    cek.innerHTML = "<i class='fa fa-spin fa-spinner'></i>";
    materiimport.style.display = "none";
    var adatidak;
    var Tidkelas, Tidmapel, TcrtToken, Taksessiswa, Tdurasi,
        Tidmateri, Tidtoken, Tidsekolah, Temail
    if (previewtoken.value.indexOf("A") == -1) {
        //Panggil data dari SpreadSheet tugasguru
        var url = script_url + "?action=riwayatmateri";
        $.getJSON(url, function (json) {
            for (x in json.records) {

                if (json.records[x].idtoken == previewtoken.value) {
                    if (json.records[x].idtoken !== "undefined") {
                        adatidak = "Ada"

                    } else {
                        adatidak = "Tidak Ada"
                    }

                    Tidkelas = json.records[x].idkelas;
                    Tidmapel = json.records[x].idmapel;
                    TcrtToken = json.records[x].crtToken;
                    Taksessiswa = json.records[x].idaksessiswa;
                    Tdurasi = json.records[x].iddurasi;
                    Tidmateri = json.records[x].idmateri;
                    Tidtgl = json.records[x].idtgl;
                    Tidtoken = json.records[x].idtoken;


                }
            }
            if (adatidak == "Ada") {

                //opsi pilih kelas
                var opsikelas = document.createElement("option");
                opsikelas.setAttribute("Value", Tidkelas);
                opsikelas.innerHTML = Tidkelas;
                opsikelas.setAttribute("selected", "true");
                previewpilihkelas.appendChild(opsikelas);
                //previewpilihkelas.disabled=true;


                keyaksessiswa.innerHTML = Taksessiswa;
                keydurasi.innerHTML = Tdurasi;
                keykelas.innerHTML = Tidkelas;
                keyidmateri.innerHTML = Tidmateri;
                keypublikasi.innerHTML = TcrtToken;
                keymapel.innerHTML = Tidmapel;
                keysekolah.innerHTML = "SDN Ratujaya 1";
                keyidSekolah.innerHTML = "SDN Ratujaya 1";

                // SCRIPT HP			
                namasekolah.innerHTML = "SDN Ratujaya 1";
                namakota.innerHTML = "Kota Depok"
                // END SCRIPT HP 			
                keyidToken.innerHTML = Tidtoken;
                hasiltoken.innerHTML = Tidmapel;
                buatopsinama.setAttribute("onclick", "datasiswa('" + Tidkelas + "')");



                var teksaksesbersyarat;
                if (Taksessiswa == "sekali") {
                    var splitTidtgl = lentanggal("" + TcrtToken + "").split("/")
                    var tgldata = new Date(splitTidtgl[1] + "-" + splitTidtgl[0] + "-" + splitTidtgl[2] + " 00:00:00");
                    var tgldataend = new Date(splitTidtgl[1] + "-" + splitTidtgl[0] + "-" + splitTidtgl[2] + " 23:59:00");
                    var tglsekarang = new Date();
                    if (tgldata < tglsekarang && tgldataend > tglsekarang) {
                        //teksaksesbersyarat = "Tgl new Date dari tgldata = "+tgldata+" dan newDate() = "+ tglsekarang +"<br/><br/>";
                        //teksaksesbersyarat += "Saya inginn membandingkan dengan nilai tgldata < tglsekarang <br/>";
                        //teksaksesbersyarat += "Mapel/Tema <b>"+Tidmapel+"</b> hanya <b>sekali</b> saja bisa diakses setelah Ananda mengirimkan tugas/Jawaban selama tanggal dipublikasikan gurumu. Nilai Ananda otomatis akan masuk ke server e-Lamaso dan diterima oleh gurumu. tes lentanggal ";
                        teksaksesbersyarat = "Mapel/Tema <b>" + Tidmapel + "</b> ini hanya bisa diakses pada hari ini saja sampai Pukul 23:59 WIB.<br/>"
                        teksaksesbersyarat += "Jika materi ini bersifat ulangan, maka setelah mengirimkan nilai, Ananda tidak lagi membuka konten e-Lamaso ini meski waktu akses masih lama. Oleh karenanya, pelajari baik-baik sebelum kirim nilai.<br/><br/>"

                        previewloginsiswa.style.display = "block";
                    } else if (tgldata < tglsekarang && tgldataend < tglsekarang) {
                        teksaksesbersyarat = "Mohon maaf, Kode Token <b>" + previewtoken.value + "</b> dengan nama mapel/tema <b>" + Tidmapel + "</b> sudah tidak bisa diakses lagi. Materi ini telah dipublikasikan sejak tanggal = " + lentanggal(TcrtToken) + " pukul 07.00 sampai pukul 23:59 WIB.";
                        previewloginsiswa.style.display = "none";
                    } else {
                        teksaksesbersyarat = "Mohon maaf, Kode Token <b>" + previewtoken.value + "</b> dengan nama Mapel/Tema: <b>" + Tidmapel + "</b> belum waktunya untuk diakses. Tunggu hingga tanggal " + lentanggal(TcrtToken) + " mulai Pukul 07:00 WIB.";
                        previewloginsiswa.style.display = "none";
                    }
                } else {
                    previewloginsiswa.style.display = "block";

                    teksaksesbersyarat = "Mapel/Tema <b>" + Tidmapel + "</b> boleh Ananda kerjakan sejak tanggal dipublikasikan untuk latihan. Di dalamnya ada fitur menyimpan hasil belajar dalam bentuk pdf/poto. Kirimkan bukti hasil belajarmu tadi ke WA gurumu. (Nilai tidak masuk ke server e-Lamaso sebab untuk latihan mandiri)";

                }
                tes.innerHTML = teksaksesbersyarat;

                mainlogin.style.display = "none";
                kontenLamaso.style.display = "block";
                divdaftarnilai.style.display = "none";

                cek.innerHTML = "";

                // script HP//
                loginelamaso()
            } else {
                cek.innerHTML = "Maaf, id Token yang Ananda masukkan tidak terdaftar. "; // + tgljson+"<br/>"+dtgl +" <br/>"+nowtgl;
            }

        })

    } else {
        //alert("Hai, sekolah lain?");
        tes.innerHTML = "<i class='fa fa-spin fa-spinner'></i>";
        cek.innerHTML = "<i class='fa fa-spin fa-spinner'></i>";
        //Panggil data dari SpreadSheet tugasguru
        var url = script_url2 + "?action=riwayatmateri";
        $.getJSON(url, function (json) {
            for (x in json.records) {

                if (json.records[x].idtoken == previewtoken.value) {
                    if (json.records[x].idtoken !== "undefined") {
                        adatidak = "Ada"

                    } else {
                        adatidak = "Tidak Ada"
                    }

                    Tidkelas = json.records[x].idkelas;
                    Tidmapel = json.records[x].idmapel;
                    TcrtToken = json.records[x].crtToken;
                    Taksessiswa = json.records[x].idaksessiswa;
                    Tdurasi = json.records[x].iddurasi;
                    Tidmateri = json.records[x].idmateri;
                    Tidtgl = json.records[x].idtgl;
                    Tidtoken = json.records[x].idtoken;
                    Tidsekolah = json.records[x].idSekolah;


                }
            }
            if (adatidak == "Ada") {

                //opsi pilih kelas
                var opsikelas = document.createElement("option");
                opsikelas.setAttribute("Value", Tidkelas);
                opsikelas.innerHTML = Tidkelas;
                opsikelas.setAttribute("selected", "true");
                previewpilihkelas.appendChild(opsikelas);
                //previewpilihkelas.disabled=true;
                //opsi pilih Sekolah
                var opsisekolah = document.createElement("option");
                opsisekolah.setAttribute("Value", Tidsekolah);
                opsisekolah.innerHTML = Tidsekolah;
                opsisekolah.setAttribute("selected", "true");
                previewpilihsekolah.innerHTML = "";
                previewpilihsekolah.appendChild(opsisekolah);
                //previewpilihkelas.disabled=true;


                keyaksessiswa.innerHTML = Taksessiswa;
                keydurasi.innerHTML = Tdurasi;
                keykelas.innerHTML = Tidkelas;
                keyidmateri.innerHTML = Tidmateri;
                keypublikasi.innerHTML = TcrtToken;
                keymapel.innerHTML = Tidmapel;
                keysekolah.innerHTML = Tidsekolah;
                keyidSekolah.innerHTML = Tidsekolah; // "SDN Ratujaya 1";

                // SCRIPT HP			
                namasekolah.innerHTML = Tidsekolah; //"SDN Ratujaya 1";
                namakota.innerHTML = Tidkelas;
                // END SCRIPT HP 			
                keyidToken.innerHTML = Tidtoken;
                hasiltoken.innerHTML = Tidmapel;
                var sumbertabel = document.getElementById("id_tabel_user");
                var inputtoken = document.getElementById("previewtoken").value.split("A");
                var brs = inputtoken[0] - 1;
                var idnpsiswa = sumbertabel.rows[brs].cells[17].innerHTML;
                keyidemail.innerHTML = sumbertabel.rows[brs].cells[3].innerHTML;

                buatopsinama.setAttribute("onclick", "datasiswalain('" + idnpsiswa + "')");



                var teksaksesbersyarat;

                if (Taksessiswa == "sekali") {
                    var splitTidtgl = lentanggal("" + TcrtToken + "").split("/")
                    var tgldata = new Date(splitTidtgl[1] + "-" + splitTidtgl[0] + "-" + splitTidtgl[2] + " 00:00:00");
                    var tgldataend = new Date(splitTidtgl[1] + "-" + splitTidtgl[0] + "-" + splitTidtgl[2] + " 23:59:00");
                    var tglsekarang = new Date();
                    if (tgldata < tglsekarang && tgldataend > tglsekarang) {
                        //teksaksesbersyarat = "Tgl new Date dari tgldata = "+tgldata+" dan newDate() = "+ tglsekarang +"<br/><br/>";
                        //teksaksesbersyarat += "Saya inginn membandingkan dengan nilai tgldata < tglsekarang <br/>";
                        //teksaksesbersyarat += "Mapel/Tema <b>"+Tidmapel+"</b> hanya <b>sekali</b> saja bisa diakses setelah Ananda mengirimkan tugas/Jawaban selama tanggal dipublikasikan gurumu. Nilai Ananda otomatis akan masuk ke server e-Lamaso dan diterima oleh gurumu. tes lentanggal ";
                        teksaksesbersyarat = "Mapel/Tema <b>" + Tidmapel + "</b> ini hanya bisa diakses pada hari ini saja sampai Pukul 23:59 WIB.<br/>"
                        teksaksesbersyarat += "Jika materi ini bersifat ulangan, maka setelah mengirimkan nilai, Ananda tidak lagi membuka konten e-Lamaso ini meski waktu akses masih lama. Oleh karenanya, pelajari baik-baik sebelum kirim nilai.<br/><br/>"

                        previewloginsiswa.style.display = "block";
                    } else if (tgldata < tglsekarang && tgldataend < tglsekarang) {
                        teksaksesbersyarat = "Mohon maaf, Kode Token <b>" + previewtoken.value + "</b> dengan nama mapel/tema <b>" + Tidmapel + "</b> sudah tidak bisa diakses lagi. Materi ini telah dipublikasikan sejak tanggal = " + lentanggal("" + TcrtToken + "") + " pukul 07.00 sampai pukul 23:59 WIB.";
                        previewloginsiswa.style.display = "none";
                    } else {
                        teksaksesbersyarat = "Mohon maaf, Kode Token <b>" + previewtoken.value + "</b> dengan nama Mapel/Tema: <b>" + Tidmapel + "</b> belum waktunya untuk diakses. Tunggu hingga tanggal "
                        lentanggal("" + TcrtToken + "") + " mulai Pukul 07:00 WIB.";
                        previewloginsiswa.style.display = "none";
                    }
                } else {
                    previewloginsiswa.style.display = "block";

                    teksaksesbersyarat = "Mapel/Tema <b>" + Tidmapel + "</b> boleh Ananda kerjakan sejak tanggal dipublikasikan untuk latihan. Di dalamnya ada fitur menyimpan hasil belajar dalam bentuk pdf/poto. Kirimkan bukti hasil belajarmu tadi ke WA gurumu. (Nilai tidak masuk ke server e-Lamaso sebab untuk latihan mandiri)";

                }
                tes.innerHTML = teksaksesbersyarat;

                mainlogin.style.display = "none";
                kontenLamaso.style.display = "block";
                divdaftarnilai.style.display = "none";

                cek.innerHTML = "";

                // script HP//
                loginelamaso()
            } else {
                cek.innerHTML = "Maaf, id Token yang Ananda masukkan tidak terdaftar. "; // + tgljson+"<br/>"+dtgl +" <br/>"+nowtgl;
            }

        })

    }

}

function datasiswa(idkelas) {

    buatopsinama.innerHTML = "<i class='fa fa-spin fa-spinner'></i>"
    var url = script_url + "?action=read";
    $.getJSON(url, function (json) {
        var opsinama = document.createElement("option");
        opsinama.setAttribute("id", "pilihannamasiswa");
        opsinama.setAttribute("value", "");
        var teksopsi = document.createTextNode("Pilih Nama Ananda");
        opsinama.appendChild(teksopsi)
        previewpilihnama.appendChild(opsinama)

        for (y in json.records) {
            if (json.records[y].kelassaatini == idkelas) {
                var opsinama = document.createElement("option");
                opsinama.setAttribute("id", "idpilihnama_" + y);
                opsinama.setAttribute("value", json.records[y].NAME);
                var teksopsi = document.createTextNode(json.records[y].NAME);
                opsinama.appendChild(teksopsi)
                previewpilihnama.appendChild(opsinama)
            }
        }
        buatopsinama.innerHTML = "Tampilkan Nama Kelas";
        buatopsinama.style.display = "none";
        timermulai.style.display = "none";
        generateopsinama.style.display = "block";
    })
}

function datasiswalain(id) {

    buatopsinama.innerHTML = "<i class='fa fa-spin fa-spinner'></i>"
    var opsinamadipreviewhp = document.getElementById("previewpilihnama");
    opsinamadipreviewhp.innerHTML = "";
    var idnp_dataanak = encodeURIComponent("idnp_datasiswa") + "=" + encodeURIComponent(id);
    var url = script_url2 + "?action=notepadkehtml&" + idnp_dataanak;
    $.getJSON(url, function (json) {

        var teksjson = json.split("\r\n")
        var opsinama = document.createElement("option");
        opsinama.setAttribute("id", "pilihannamasiswa");
        opsinama.setAttribute("value", "");
        var teksopsi = document.createTextNode("Pilih Nama Ananda");
        opsinama.appendChild(teksopsi)
        previewpilihnama.appendChild(opsinama)

        for (i = 0; i < teksjson.length; i++) {


            var opsinama = document.createElement("option");
            opsinama.setAttribute("id", "idpilihnama_" + i);
            opsinama.setAttribute("value", teksjson[i].toUpperCase());
            var teksopsi = document.createTextNode(teksjson[i].toUpperCase());
            opsinama.appendChild(teksopsi)
            previewpilihnama.appendChild(opsinama)


        }
        buatopsinama.innerHTML = "Tampilkan Nama Kelas";
        buatopsinama.style.display = "none";
        timermulai.style.display = "none";
        generateopsinama.style.display = "block";
    })

}
////////////////////////////////////////////////////////
///////// FUNGSI FUNGSI PENTING ///////////////
////////////////////////////////////////////////////////
function lentanggal(id) {
    //var teks = id;
    var tglsplit, blnsplit, thnsplit;
    if (id != 0) {
        if (id.length == 7) {
            tglsplit = addZero(id.slice(0, 1));
            blnsplit = id.slice(1, 3);
            thnsplit = id.slice(3, 7);
        } else {
            tglsplit = id.slice(0, 2);
            blnsplit = id.slice(2, 4);
            thnsplit = id.slice(4, 8);
        }
    }
    id = tglsplit + "/" + blnsplit + "/" + thnsplit;
    return id
}

//////////// SKRIP ASLI LAMASO ////////////////////////
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    };
    return i;
}

function deleteZero(i) {
    if (i.slice(0, 1) == "0") {
        i = i.slice(1, 2);
    };
    return i;
}





//scripit HP
var mySidebar = document.getElementById("mySidebar"); // Get the Sidebar?
var overlayBg = document.getElementById("myOverlay"); // Get the DIV with overlay effect
function w3_open() { // Toggle between showing and hiding the sidebar, and add overlay effect
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

function w3_close() { // Close the sidebar with the close button
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

function barloginelamaso() {
    //bersyarat
    //kontenLamaso.style.display="none";
    //mainlogin.style.display="block";
    barlogin.style.display = "block";
    barsiswa.style.display = "none";
    w3_close();
}

function loginelamaso() {
    //bersyarat
    //kontenLamaso.style.display="none";
    //mainlogin.style.display="block";
    barlogin.style.display = "none";
    barsiswa.style.display = "block";
    w3_close();
}

function logout() {
    window.location.reload()
    w3_close();
}

function logoutgantireload() {
    kontenLamaso.style.display = "none";
    mainlogin.style.display = "block";
    barlogin.style.display = "block";
    barsiswa.style.display = "none";
    hasilakhir.style.display = "none";
    previewtoken.value = "";
    tes.innerHTML = "";
    tempatinputpilihanganda.innerHTML = "";
    tempatinputjawabanessay.innerHTML = "";
    //tekshtmlnilai.value = ""
    //tes.style.display = "block"
    w3_close();
}

function daftarnilai() {
    mainlogin.style.display = "none";
    kontenLamaso.style.display = "none";
    divdaftarnilai.style.display = "block"
    w3_close();



}

function getdaftarnilai() {
    // ---- CARI DATA BERDASARKAN TABEL ID "tabel_riwayat_materi", yang dicari adalah:
    // -- 1: Token, 
    //bersihkan dulu tempatnya;
    alert("Data ini muncul dengan benar hanya setelah Ananda mengerjakan belajar")
    datasiswatoken.innerHTML = "";

    var caritokenini = document.getElementById("getidtoken").value;
    var url = script_url2 + "?action=riwayatmateri"
    var mapeljson, pgjson, essayjson;
    $.getJSON(url, function (json) {
        console.log(json)
        for (i = 0; i < json.records.length; i++) {
            if (json.records[i].idtoken == caritokenini) {
                mapeljson = json.records[i].idmapel;
                pgjson = json.records[i].jumlahpg;
                essayjson = json.records[i].jumlahessay;
                //break;
            }
        }


        // // var sumbertabel = document.getElementById("tabel_riwayat_materi");
        // // if (sumbertabel == null) {
        // //     alert("Kami Arahkan untuk membaca Riwayat Materi yang Anda buat. Tujuannya untuk mengenali token yang Anda isi");
        // //     pembelajaran()
        // // } else {
        // //     //var jumlahbarissumbertabel = sumbertabel.rows.length;
        // //     for (a = 0; a < sumbertabel.rows.length; a++) {
        // //         if (sumbertabel.rows[a].cells[2].innerHTML == caritokenini) {
        // //             var barisyangdicari = a
        // //         }
        // //     }

        //--------- AMBIL DATATOKEN DULU DAN MENYEDIAKAN ID UNTUK JUMLAHSOAL PG DAN ESSAY-----------
        var tabeldatatoken = document.createElement("table");
        tabeldatatoken.setAttribute("class", "versi-table");
        tabeldatatoken.setAttribute("id", "tabel_data_token");
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Token"
        var td = tr.insertCell(-1);
        td.innerHTML = caritokenini; //sumbertabel.rows[barisyangdicari].cells[2].innerHTML
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Mata Pelajaran/Tema"
        var td = tr.insertCell(-1);
        td.innerHTML = mapeljson; //sumbertabel.rows[barisyangdicari].cells[4].innerHTML
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Jumlah Soal PG"
        var td = tr.insertCell(-1);
        td.innerHTML = pgjson; //sumbertabel.rows[barisyangdicari].cells[7].innerHTML
        var tr = tabeldatatoken.insertRow(-1);
        var td = tr.insertCell(-1);
        td.innerHTML = "Jumlah Soal Essay"
        var td = tr.insertCell(-1);
        td.innerHTML = essayjson; //sumbertabel.rows[barisyangdicari].cells[8].innerHTML

        datatoken.innerHTML = "<h4>Data Token</h4>";
        datatoken.appendChild(tabeldatatoken);
    })
    //var jumlahsoalpg = pgjson; //sumbertabel.rows[barisyangdicari].cells[7].innerHTML

    // //--------- AMBIL DAFTAR SISWA SESUAI DENGAN DATA TABEL SISWA -----------//

    // // ------ DATA DIBUAT DALAM BENTUK JSON SCRIPT -----------------
    // var kelaslogin = document.getElementById("kelassayapilih").innerHTML;
    // var sumberkelasnama = document.getElementsByClassName("koleksinamakelas" + kelaslogin);

    var tabeldatanilai = document.createElement("table");
    tabeldatanilai.setAttribute("id", "tabel_data_nilai");
    tabeldatanilai.setAttribute("class", "versi-table")
    tabeldatanilai.setAttribute("style", "border-collapse:collapse;border:1px solid black");
    var tr = tabeldatanilai.insertRow(-1)
    var th1 = document.createElement("th");
    th1.innerHTML = "No.";
    var th2 = document.createElement("th");
    th2.innerHTML = "Nama Siswa";
    tr.appendChild(th1);
    tr.appendChild(th2);

    var jumlahsoalPG = pgjson; //tabel_data_token.rows[2].cells[1].innerHTML
    if (jumlahsoalPG !== "") { //Jika tidak ada PG maka ga usah bikin kolom 
        var th3 = document.createElement("th");
        th3.innerHTML = "Skor PG";
        tr.appendChild(th3);
    }
    var jumlahsoalEssay = essayjson; // tabel_data_token.rows[3].cells[1].innerHTML
    if (jumlahsoalEssay !== "") {
        var th4 = document.createElement("th");
        th4.innerHTML = "Skor Essay";
        tr.appendChild(th4);
    }
    var th5 = document.createElement("th");
    th5.innerHTML = "Jumlah Nilai";
    tr.appendChild(th5);

    var sumberkelasnama = document.getElementById("previewpilihnama").children;
    for (var i = 1; i < sumberkelasnama.length; i++) {
        var brs = tabeldatanilai.insertRow(-1);
        var cell1 = brs.insertCell(-1);
        cell1.innerHTML = i;
        var cell1 = brs.insertCell(-1);
        cell1.innerHTML = sumberkelasnama[i].value
        var namasiswaini = sumberkelasnama[i].value

        //PG 
        var jumlahsoalPG = pgjson; //tabel_data_token.rows[2].cells[1].innerHTML
        if (jumlahsoalPG !== "") { //Jika tidak ada PG maka ga usah bikin kolom 
            var cell1 = brs.insertCell(-1);
            cell1.innerHTML = "<i class='fa fa-spin fa-spinner'></i>"
        }
        //essay
        var jumlahsoalEssay = essayjson; //tabel_data_token.rows[3].cells[1].innerHTML
        if (jumlahsoalEssay !== "") {
            var cell1 = brs.insertCell(-1);
            cell1.innerHTML = "'-";
        }
        var cell1 = brs.insertCell(-1);
        cell1.innerHTML = "'-"
    }



    // // ----- tabel analisis PG 
    // var jumlahsoalPG = tabel_data_token.rows[2].cells[1].innerHTML;
    // if (jumlahsoalPG !== "") {
    //     var tabelanalisispg = document.createElement("table");
    //     tabelanalisispg.setAttribute("id", "tabel_data_analisis");
    //     tabelanalisispg.setAttribute("class", "table2excel versii-table")
    //     tabelanalisispg.setAttribute("style", "border-collapse:collapse;border:1px solid black");
    //     tabelanalisispg.setAttribute("data-tableName", "Test Table 1")
    //     //data-tableName="Test Table 1"
    //     var tr = tabelanalisispg.insertRow(-1)
    //     var th1 = document.createElement("th");
    //     th1.setAttribute("rowspan", "2");
    //     th1.innerHTML = "No.";
    //     var th2 = document.createElement("th");
    //     th2.setAttribute("rowspan", "2");
    //     th2.innerHTML = "Nama Siswa";
    //     var th3 = document.createElement("th");
    //     th3.setAttribute("rowspan", "2");
    //     th3.innerHTML = "Skor PG";
    //     var th4 = document.createElement("th");
    //     th4.setAttribute("colspan", jumlahsoalpg);
    //     th4.innerHTML = "Pilihan Ganda";
    //     var th5 = document.createElement("th");
    //     th5.setAttribute("colspan", jumlahsoalpg)
    //     th5.innerHTML = "Nilai Tiap PG"

    //     tr.appendChild(th1);
    //     tr.appendChild(th2);
    //     tr.appendChild(th3);
    //     tr.appendChild(th4);
    //     tr.appendChild(th5);



    //     var tr2 = tabelanalisispg.insertRow(-1)
    //     //var tdkosong = tr2.insertCell(-1);
    //     //var tdkosong = tr2.insertCell(-1);
    //     //var tdkosong = tr2.insertCell(-1);
    //     for (var j = 0; j < jumlahsoalpg; j++) {
    //         var th7 = document.createElement("th");
    //         th7.innerHTML = (j + 1);
    //         tr2.appendChild(th7);
    //     }
    //     for (var j = 0; j < jumlahsoalpg; j++) {
    //         var th8 = document.createElement("th");
    //         th8.innerHTML = (j + 1);
    //         tr2.appendChild(th8);
    //     }

    //     for (var i = 0; i < sumberkelasnama.length; i++) {
    //         var brs = tabelanalisispg.insertRow(-1);
    //         var p = i % 17;
    //         var cell1 = brs.insertCell(-1);
    //         if (p == 0) {
    //             cell1.setAttribute("style", "break-after:page")
    //         };
    //         cell1.innerHTML = (i + 1);
    //         var cell1 = brs.insertCell(-1);
    //         cell1.innerHTML = sumberkelasnama[i].innerHTML;

    //         var cell1 = brs.insertCell(-1);
    //         //cell1.innerHTML = "<i class='fa fa-spin fa-spinner'></i>"

    //         for (var j = 0; j < jumlahsoalpg; j++) {
    //             //var tr2 = tabelanalisispg.insertRow(-1)
    //             var cell1 = brs.insertCell(-1);
    //             //cell1.innerHTML = "P" + (j+1)
    //         }
    //         for (var j = 0; j < jumlahsoalpg; j++) {
    //             //var tr2 = tabelanalisispg.insertRow(-1)
    //             var cell1 = brs.insertCell(-1);
    //             //cell1.innerHTML = "SkorPG_" + (j+1)
    //         }

    //     }

    //     // -- SELESAI TABEL ANALISIS PG

    var url = script_url2 + "?action=respon_nilai"
    $.getJSON(url, function (json) {
        //menentukan idheaderguru
        var dataheader = [];
        var dataskor = []
        for (t in json.records[0]) {
            if (t.indexOf("PG_") > -1) {
                dataheader.push(t)
            };
            if (t.indexOf("SKOR_") > -1) {
                dataskor.push(t)
            }
        }

        var baristabel = document.getElementById("tabel_data_nilai").rows
        for (var a = 1; a < baristabel.length; a++) {
            baristabel[a].cells[2].innerHTML = "";
            var x = baristabel[a].cells[1].innerHTML

            for (var b = 0; b < json.records.length; b++) {
                //if(json.records[b].namasiswa == x){
                if (json.records[b].namasiswa == x && json.records[b].idtoken == caritokenini) {
                    baristabel[a].cells[2].innerHTML = (json.records[b].nilaiPG).replace(".", ",");
                    baristabel[a].cells[3].innerHTML = "";
                    var adanilaiessay = (json.records[b].nilaiEssay).replace(".", ",");
                    if (adanilaiessay == "") {
                        //var btn = document.createElement("button")
                        //btn.setAttribute("onclick", "koreksiessay('" + b + "<|>" + json.records[b].html_jawaban + "')")
                        //btn.innerHTML = "Beri Nilai"
                        baristabel[a].cells[3].innerHTML = "Sedang dikoreksi"
                        //baristabel[a].cells[3].appendChild(btn)
                    } else {
                        baristabel[a].cells[3].innerHTML = adanilaiessay;
                        baristabel[a].cells[4].innerHTML = (((json.records[b].nilaiPG * 1 + json.records[b].nilaiEssay * 1) / 2).toFixed(2)).replace(".", ",");

                    }
                }

            }
        }

        var baristabelanalisis = document.getElementById("tabel_data_analisis").rows
        for (a = 0; a < json.records.length; a++) {
            var namasiswajson = json.records[a].namasiswa;
            for (b = 2; b < baristabelanalisis.length; b++) {
                var namasiswatabel = baristabelanalisis[b].cells[1].innerHTML
                if (namasiswajson == namasiswatabel && json.records[a].idtoken == caritokenini) {
                    baristabelanalisis[b].cells[2].innerHTML = (json.records[a].nilaiPG).replace(".", ",");
                    var indekskorpg = (parseInt(jumlahsoalpg) + 3)
                    for (c = 0; c < jumlahsoalpg; c++) {
                        baristabelanalisis[b].cells[c + 3].innerHTML = json.records[a][dataheader[c]];
                        baristabelanalisis[b].cells[c + indekskorpg].innerHTML = json.records[a][dataskor[c]]
                    }
                }
                //baristabelanalisis[b].cells[2].innerHTML ="";
            }
        }

        //datasiswatoken.innerHTML = json.records[0].namasiswa;
        //console.log(myJson);
    })

    datasiswatoken.innerHTML = "<h4>Tabel Analisis Nilai</h4>";
    // var excel = document.createElement("button");
    // excel.setAttribute("onclick", "tombollain2()");
    // excel.innerHTML = "<i class='fa fa-file-excel-o'></i> Simpan ke Ms. Excel"
    // datasiswatoken.appendChild(excel);

    //     var print = document.createElement("button");
    //     print.setAttribute("onclick", "printanalisis2()")
    //     print.innerHTML = "<i class='fa fa-print'></i> Print"

    //     datasiswatoken.innerHTML += " ";
    //     datasiswatoken.appendChild(print);
    datasiswatoken.innerHTML += "<hr/>"
    datasiswatoken.appendChild(tabeldatanilai)

    //     datasiswatoken.innerHTML += "<h4>Tabel Analisis Pilihan Ganda</h4>";
    //     var excel = document.createElement("button");
    //     excel.setAttribute("onclick", "tombollain()");
    //     excel.innerHTML = "<i class='fa fa-file-excel-o'></i> Simpan ke Ms. Excel"
    //     datasiswatoken.appendChild(excel);

    //     var print = document.createElement("button");
    //     print.setAttribute("onclick", "printanalisis()")
    //     print.innerHTML = "<i class='fa fa-print'></i> Print"

    //     datasiswatoken.innerHTML += " ";
    //     datasiswatoken.appendChild(print);
    //     datasiswatoken.innerHTML += "<hr/>"
    //     datasiswatoken.appendChild(tabelanalisispg)
    //     //<button class="exportToExcel">Export to XLS</button>
    //     //var konsol = array_idpg()
    //     //console.log(konsol);
    // }
    // document.getElementById("judulpetunjuk").innerHTML = "";
    // document.getElementById("isipetunjuk").innerHTML = "";
}
