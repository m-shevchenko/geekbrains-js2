function Container() {
    this.id = "";
    this.className = "";
    this.htmlCode = "";
}

Container.prototype.render = function () {
    return this.htmlCode;
};

Container.prototype.remove = function () {
    if (this.id) {
        var elem = document.getElementById(this.id);
        elem.parentNode.removeChild(elem);
    }
};

function Menu(myID, myClass, myItems) {
    Container.call(this);
    this.id = myID;
    this.className = myClass;
    this.items = myItems;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function () {
    var result = '<ul class="' + this.className + '"id="' + this.id + '">';
    for (var i = 0; i < this.items.length; i++) {
        if (this.items[i] instanceof MenuItem) {
            result += this.items[i].render();
        }
    }
    result += '</ul>';
    return result;
};

function MenuItem(myHref, myLabel) {
    Container.call(this);
    this.className = "menu-item";
    this.Href = myHref;
    this.label = myLabel;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function () {
    return '<li class="' + this.className + '"><a href="' + this.href + '">' + this.label + '</a></li>';
};


function MenuBlock(blockID, blockClass, blockItems) {
    Menu.call(this);
    this.id = blockID;
    this.className = blockClass;
    this.block = blockItems;
}
MenuBlock.prototype = Object.create(Menu.prototype);
MenuBlock.prototype.constructor = MenuBlock;

MenuBlock.prototype.render = function () {
    var result = '<ul class="' + this.className + '"id="' + this.id + '">';

    for (var i = 0; i < this.block.length; i++) {
        if (this.block[i] instanceof MenuBlockItem) {
            result += this.block[i].render();
        }
    }
    result += '</ul>';
    return result;
};

function MenuBlockItem(MenuBlockID, MenuBlockClass, MenuBlockItems, MenuBlockHref, MenuBlockLabel) {
    Menu.call(this);
    this.id = MenuBlockID;
    this.className = MenuBlockClass;
    this.Href = MenuBlockHref;
    this.label = MenuBlockLabel;
    this.blockItem = MenuBlockItems;
}

MenuBlockItem.prototype = Object.create(MenuBlock.prototype);
MenuBlockItem.prototype.constructor = MenuBlockItem;

MenuBlockItem.prototype.render = function () {
    var result = '<li class="' + this.className + '" id="' + this.id + '"><a href="' + this.href + '">' + this.label + '</a><ul class="' + this.className + '">';
    for (var i = 0; i < this.blockItem.length; i++) {
        if (this.blockItem[i] instanceof Item) {
            result += this.blockItem[i].render();
        }

    }
    result += '</ul></li>';
    return result;
};

function Item(ItemHref, ItemLabel) {
    Container.call(this);
    this.className = "item";
    this.Href = ItemHref;
    this.label = ItemLabel;
}

Item.prototype = Object.create(Container.prototype);
Item.prototype.constructor = Item;

Item.prototype.render = function () {
    return '<li class="' + this.className + '"><a href="' + this.href + '">' + this.label + '</a></li>';
};

