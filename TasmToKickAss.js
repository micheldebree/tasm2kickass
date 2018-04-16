module.exports = {
    convert:

    function (tasmSource) {
        var kickAssSource = tasmSource;

        var Labels1Replacement = ".label $1$2";
        var Labels2Replacement = ".var $1$2";
        var Labels3Replacement = "$1:$2";
        var PcReplacement = "$1.pc$3";
        var CommentReplacement = "//";
        var RorRolReplacement = "$1";
        var OffsParReplacement = "$1 //TODO: Replace .pc + .offs with .pseudopc block";
        var XorReplacement = "$1^";

        var Labels1Regex = /^([a-zA-Z0-9_]+)(\s*=.*\*)/gm;
        var Labels2Regex = /^([a-zA-Z0-9_]+)(\s*=.*)/gm;
        var Labels3Regex = /^([a-zA-Z0-9_]+)(.*)/gm;
        var PcRegex = /^(.*)(\*)(\s*=\s*.*)/gm;
        var CommentRegex = /(;)/gm;
        var RorRolRegex = /\b(ror|rol|lsr|asl)(\b\s*a\b)/gm;
        var OffsParRegex = /^(.*\.offs.*)$/gm;
        var ParRegex1 = /^(?!.*(sta|lda|jmp|ora|and|eor|adc|sbc|cmp)\s*\(.*(\)\s*,\s*y|,\s*x\s*\)))(([^\n;])*)/gm;
        var ParRegex2 = /((sta|lda|jmp|ora|and|eor|adc|sbc|cmp)\s*\()(.*)(?=(\)\s*,\s*y\s*)|(,\s*x\s*\)))/gm;
        var XorRegex1 = /^(?!.*\/\/)(.*?\$[a-fA-f0-9]{1,2}|[01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\:)(?=\$[a-fA-f0-9]{1,2}|[01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])/gm;

        kickAssSource = kickAssSource.replace(Labels1Regex, Labels1Replacement);
        kickAssSource = kickAssSource.replace(Labels2Regex, Labels2Replacement);
        kickAssSource = kickAssSource.replace(Labels3Regex, Labels3Replacement);
        kickAssSource = kickAssSource.replace(PcRegex, PcReplacement);
        kickAssSource = kickAssSource.replace(RorRolRegex, RorRolReplacement);
        kickAssSource = kickAssSource.replace(OffsParRegex, OffsParReplacement);
        kickAssSource = kickAssSource.replace(ParRegex1, function($0) { return $0.replace(/\(/g,'\[').replace(/\)/g,'\]'); });
        kickAssSource = kickAssSource.replace(ParRegex2, function($0,$1,$2,$3) { return $1+$3.replace(/\(/g,'\[').replace(/\)/g,'\]'); });
        kickAssSource = kickAssSource.replace(CommentRegex, CommentReplacement);
        kickAssSource = kickAssSource.replace(XorRegex1, XorReplacement);

        return kickAssSource;
    }
};
