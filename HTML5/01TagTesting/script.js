// Initializer
window.addEventListener('load', () => {
    // Gets context
    const canvas = document.getElementById('catgame');
    const context = canvas.getContext('2d');

    // Creates sprites
    const catUrl = 'https://static.wikia.nocookie.net/gensin-impact/images/2/24/Wildlife_Northland_Cat_Icon.png/revision/latest?cb=20210316084849';
    const catSprite = SpriteFactory.generateSprite(catUrl, new Point(-256, 0));
    
    // Constants
    const VELOCITY = new Point(1, 0);
    const WRAP_POS = new Point(-256, 0);

    // Main loop - Renders screen
    setInterval(() => {
        // Fills background to black
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);

        catSprite.wrap((pos) => {
            return pos.x > canvas.width;
        }, WRAP_POS);

        // Renders cat sprite
        catSprite.draw(context);
        catSprite.move(VELOCITY);
    }, 15);
});

class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    move(pOther) {
        this._x += pOther.x;
        this._y += pOther.y;
    }

    set(pOther) {
        this._x = pOther.x;
        this._y = pOther.y;
    }
};

class Sprite {
    constructor(_img, _pos) {
        this._img = _img;
        this._pos = _pos;
    }

    draw(context) {
        context.drawImage(this._img, this._pos.x, this._pos.y);
    }

    move(vector) {
        this._pos.move(vector);
    }

    wrap(wrapCondition, wrapPosition) {
        if (wrapCondition(this._pos)) {
            this._pos.set(wrapPosition);
        }
    }
};

class SpriteFactory {
    static generateSprite = (imgUrl, pos=new Point(0, 0)) => {
        let img = new Image();
        img.src = imgUrl;
        return new Sprite(img, pos);
    };
}