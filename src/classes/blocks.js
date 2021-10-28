import {col, css, row} from "../utils/utils";

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHtml() {
        throw new Error('Method toHTML must be implemented.')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const contentHtml = this.value.map(item => col(`<p>${item}</p>`));
        return row(contentHtml.join(''), css(this.options.styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {alt = '', imageStyles: is, styles} = this.options
        return row(`<img src=${this.value} alt=${alt} style="${css(is)}">`, css(styles))
    }
}