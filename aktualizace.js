  modate = new Date(document.lastModified);
        year = modate.getYear();
        if (year < 80) 
                year += 2000;
        else if (year >= 80 && year < 200)
                year += 1900;
        mon = modate.getMonth()+1;
    if (mon < 10) 
           mon = ""+mon;
        dat = modate.getDate();
        if (dat < 10)
                dat = ""+dat;
        resu = "Datum poslední aktualizace: "+dat+"."+mon+"."+year;
        document.write(resu);
