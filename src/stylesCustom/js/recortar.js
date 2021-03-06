$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) {
        $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    }
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};

$.fn.recortar2 = function(text, font, lineWidth) {
    if (text != undefined && text != null) {
    
        lineWidth = lineWidth - 45;

        var wl = 0;

        var widthacumuladoTotal = 0;
        var posText = 0;

        //console.log('-------TEXTO: ' + text);

        while (widthacumuladoTotal < lineWidth && posText < text.length) {
            
            // Pongo el siguiente caracter
            caracter = text.charAt(posText);
            
            // consulto el largo en px
            var sizeChar = $.fn.textWidth(caracter, font)
            
            // Incremento el acumulado
            widthacumuladoTotal = widthacumuladoTotal + sizeChar;

            if (widthacumuladoTotal < lineWidth) {
                // Paso al siguiente caracter
                posText = posText + 1;
                wl = widthacumuladoTotal;
            }
        }

        if ((posText) < text.length) {
            text = text.substr(0,posText-4);
            text = text + '...';
        }

        //console.log('-------NUEVO LENGTH: ' + wl);
        //console.log('-------NUEVO TEXTO: ' + text);

        return text;
    }
    return "";
};

function recortarTituloPrincipal(text) {
    return $.fn.recortar2(text, '23pt sans-serif', 800);
}

function recortarTituloSecundario(text) {
    return $.fn.recortar2(text, '20px Roboto', 950);
}

function recortarSummary(text) {
    return reemplazoCaracteres(text, '12pt Roboto', 1700);
}

function recortarTituloProductoExterno(text) {
    return $.fn.recortar2(text, '16px Roboto', 243);
}

function recortarHeaderProductoExterno(text) {
    return $.fn.recortar2(text, '20px Roboto', 460);
}

function recortarDescriptionProductoExterno(text) {
    return $.fn.recortar2(text, '16px Roboto', 1000);
}

function recortarTituloListado(text)  {
    return $.fn.recortar2(text, '26px Roboto', 800);
}

function recortarSummaryListado(text) {
    return reemplazoCaracteres(text, '12px sans-serif', 1200);
}

function recortarTituloListadoTemplateOne(text)  {
    return $.fn.recortar2(text, '26px sans-serif', 630);
}

function recortarSummaryListadoTemplateOne(text) {
    return reemplazoCaracteres(text, '14px sans-serif', 1100);
}

function recortarTituloBeneficio(text)  {
    return $.fn.recortar2(text, '26px sans-serif', 395);
}

function recortarSummaryBeneficio(text) {
    return reemplazoCaracteres(text, '14px sans-serif', 1300);
}

function recortarTituloListadoTemplateFour(text)  {
    return $.fn.recortar2(text, '26px sans-serif', 1300);
}

function recortarSummaryListadoTemplateFour(text) {
        return reemplazoCaracteres(text, '14px sans-serif', 2050);
}

function reemplazoCaracteres(text, tipografia, size) {
        if (text){
        var modified = text.replace('&nbsp;',' ');
        
        modified = modified.replace(new RegExp('&aacute;', "g"),'??');
        modified = modified.replace(new RegExp('&eacute;', "g"),'??');
        modified = modified.replace(new RegExp('&iacute;', "g"),'??');
        modified = modified.replace(new RegExp('&oacute;', "g"),'??');
        modified = modified.replace(new RegExp('&uacute;', "g"),'??');
        
        modified = modified.replace(new RegExp('&Aacute;', "g"),'??');
        modified = modified.replace(new RegExp('&Eacute;', "g"),'??');
        modified = modified.replace(new RegExp('&Iacute;', "g"),'??');
        modified = modified.replace(new RegExp('&Oacute;', "g"),'??');
        modified = modified.replace(new RegExp('&Uacute;', "g"),'??');
    
        modified = $.fn.recortar2(modified, tipografia, size);

        modified = modified.replace(new RegExp('??', "g"),'&aacute;');
        modified = modified.replace(new RegExp('??', "g"),'&eacute;');
        modified = modified.replace(new RegExp('??', "g"),'&iacute;');
        modified = modified.replace(new RegExp('??', "g"),'&oacute;');
        modified = modified.replace(new RegExp('??', "g"),'&uacute;');

        modified = modified.replace(new RegExp('??', "g"),'&Aacute;');
        modified = modified.replace(new RegExp('??', "g"),'&Eacute;');
        modified = modified.replace(new RegExp('??', "g"),'&Iacute;');
        modified = modified.replace(new RegExp('??', "g"),'&Oacute;');
        modified = modified.replace(new RegExp('??', "g"),'&Uacute;');
        
        return modified;
    }
    return "";
}
