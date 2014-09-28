angular.module('popup').factory('tagType', function () {
    //Note: both key and value should be small caps. For each value there is a corresponding icon in popup.css
    var TAGS = {
        "a": "html4",
        "abbr": "html4",
        "address": "html4",
        "area": "html4",
        "b": "html4",
        "base": "html4",
        "bdo": "html4",
        "blockquote": "html4",
        "body": "html4",
        "br": "html4",
        "button": "html4",
        "caption": "html4",
        "cite": "html4",
        "code": "html4",
        "col": "html4",
        "colgroup": "html4",
        "dd": "html4",
        "del": "html4",
        "dfn": "html4",
        "dialog": "html4",
        "div": "html4",
        "dl": "html4",
        "dt": "html4",
        "em": "html4",
        "fieldset": "html4",
        "form": "html4",
        "h1": "html4",
        "h2": "html4",
        "h3": "html4",
        "h4": "html4",
        "h5": "html4",
        "h6": "html4",
        "head": "html4",
        "hr": "html4",
        "html": "html4",
        "i": "html4",
        "iframe": "html4",
        "img": "html4",
        "input": "html4",
        "ins": "html4",
        "kbd": "html4",
        "label": "html4",
        "legend": "html4",
        "li": "html4",
        "link": "html4",
        "map": "html4",
        "meta": "html4",
        "noscript": "html4",
        "object": "html4",
        "ol": "html4",
        "optgroup": "html4",
        "option": "html4",
        "p": "html4",
        "param": "html4",
        "pre": "html4",
        "q": "html4",
        "s": "html4",
        "samp": "html4",
        "script": "html4",
        "select": "html4",
        "small": "html4",
        "span": "html4",
        "strong": "html4",
        "style": "html4",
        "sub": "html4",
        "sup": "html4",
        "table": "html4",
        "tbody": "html4",
        "td": "html4",
        "textarea": "html4",
        "tfoot": "html4",
        "th": "html4",
        "thead": "html4",
        "title": "html4",
        "tr": "html4",
        "u": "html4",
        "ul": "html4",
        "var": "html4",
        "acronym": "obsolete",
        "applet": "obsolete",
        "basefont": "obsolete",
        "bgsound": "obsolete",
        "big": "obsolete",
        "blink": "obsolete",
        "center": "obsolete",
        "dir": "obsolete",
        "font": "obsolete",
        "frame": "obsolete",
        "frameset": "obsolete",
        "hgroup": "obsolete",
        "isindex": "obsolete",
        "listing": "obsolete",
        "marquee": "obsolete",
        "nobr": "obsolete",
        "noframes": "obsolete",
        "plaintext": "obsolete",
        "spacer": "obsolete",
        "strike": "obsolete",
        "tt": "obsolete",
        "xmp": "obsolete",
        "article": "html5",
        "aside": "html5",
        "audio": "html5",
        "bdi": "html5",
        "canvas": "html5",
        "data": "html5",
        "datalist": "html5",
        "details": "html5",
        "embed": "html5",
        "figcaption": "html5",
        "figure": "html5",
        "footer": "html5",
        "header": "html5",
        "keygen": "html5",
        "main": "html5",
        "mark": "html5",
        "menu": "html5",
        "menuitem": "html5",
        "meter": "html5",
        "nav": "html5",
        "output": "html5",
        "picture": "html5",
        "progress": "html5",
        "rp": "html5",
        "rt": "html5",
        "ruby": "html5",
        "section": "html5",
        "source": "html5",
        "summary": "html5",
        "time": "html5",
        "track": "html5",
        "video": "html5",
        "wbr": "html5",
        "content": "draft",
        "decorator": "draft",
        "element": "draft",
        "shadow": "draft",
        "template": "draft",
        "altglyph": "svg",
        "altglyphdef": "svg",
        "altglyphitem": "svg",
        "animate": "svg",
        "animatecolor": "svg",
        "animatemotion": "svg",
        "animatetransform": "svg",
        "circle": "svg",
        "clippath": "svg",
        "color-profile": "svg",
        "cursor": "svg",
        "defs": "svg",
        "desc": "svg",
        "ellipse": "svg",
        "feblend": "svg",
        "fecolormatrix": "svg",
        "fecomponenttransfer": "svg",
        "fecomposite": "svg",
        "feconvolvematrix": "svg",
        "fediffuselighting": "svg",
        "fedisplacementmap": "svg",
        "fedistantlight": "svg",
        "feflood": "svg",
        "fefunca": "svg",
        "fefuncb": "svg",
        "fefuncg": "svg",
        "fefuncr": "svg",
        "fegaussianblur": "svg",
        "feimage": "svg",
        "femerge": "svg",
        "femergenode": "svg",
        "femorphology": "svg",
        "feoffset": "svg",
        "fepointlight": "svg",
        "fespecularlighting": "svg",
        "fespotlight": "svg",
        "fetile": "svg",
        "feturbulence": "svg",
        "filter": "svg",
        "font-face": "svg",
        "font-face-format": "svg",
        "font-face-name": "svg",
        "font-face-src": "svg",
        "font-face-uri": "svg",
        "foreignobject": "svg",
        "g": "svg",
        "glyph": "svg",
        "glyphref": "svg",
        "hkern": "svg",
        "image": "svg",
        "line": "svg",
        "lineargradient": "svg",
        "marker": "svg",
        "mask": "svg",
        "metadata": "svg",
        "missing-glyph": "svg",
        "mpath": "svg",
        "path": "svg",
        "pattern": "svg",
        "polygon": "svg",
        "polyline": "svg",
        "radialgradient": "svg",
        "rect": "svg",
        "set": "svg",
        "stop": "svg",
        "svg": "svg",
        "switch": "svg",
        "symbol": "svg",
        "text": "svg",
        "textpath": "svg",
        "tref": "svg",
        "tspan": "svg",
        "use": "svg",
        "view": "svg",
        "vkern": "svg"
    };

    /**
     * Get a tag and returns its type.
     * @param tagName {string} the tag name to lookup. It doesn't have to be upper case because it'll be normalized.
     * @returns {string} returns the type of tag
     */
    function tagType (tagName) {
        //normalize the parameter to be used in the lookup
        tagName = tagName.toLowerCase();
        //this will automatically return undefined when the tag doesn't exist in the lookup table
        return TAGS[tagName] || 'unknown';
    }

    return tagType;
});