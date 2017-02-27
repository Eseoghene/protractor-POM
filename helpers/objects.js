var act = require('./actions');
function Textbox(type, identifier, label) {
    this.name = label;
    this.obj = identifier;
    this._type = type;
    this._element = act.getelement(type, identifier)
}
function Button(type, identifier, label) {
    this.name = label;
    this.obj = identifier;
    this._type = type;
    this._element = act.getelement(type, identifier)
}
function Link(type, identifier, label) {
    this.name = label;
    this.obj = identifier;
    this._type = type;
    this._element = act.getelement(type, identifier)
}
function Img(type, identifier, label) {
    this.name = label;
    this.obj = identifier;
    this._type = type;
    this._element = act.getelement(type, identifier)
}
function Dropdown(type, identifier, label) {
    this.name = label;
    this.obj = identifier;
    this._type = type;
    this._element = act.getelement(type, identifier)
}
function Page(type, identifier, label, pagename) {
    this.name = label;
    this.obj = identifier;
    this._type = type;
    this.pagename = pagename;
    this._element = act.getelement(type, identifier)

}
function Table(type, identifier, label) {
    this.name = label;
    this.obj = identifier;
    this._type = type;
    this._elem = act.getelement(type, identifier);
    this._element = act.getallelements(type, identifier)
}
function TableRows(type, identifier, label) {
    this.name = label;
    this.obj = identifier;
    this._type = type;
    this._elem = act.getallelements(type, identifier);
}
function TableCells(type, identifier, label) {
    this.name = label;
    this.obj = identifier;
    this._type = type;
    this._elem = act.getallelements(type, identifier);
}
Textbox.prototype.entertext = function (text) {

    return act.sendkeys(this._element, this.name, text)
};
Textbox.prototype.clear = function () {
    return act.clear(this._element, this.name)
};
Textbox.prototype.checkenabled = function () {

};
Button.prototype.click = function () {
    return act.clickelement(this._element, this.name)
};

Link.prototype.click = function () {
    return act.clickelement(this._element, this.name)
};
Img.prototype.visible = function () {
    return act.visible(this._element, this.name)
};
Page.prototype.pagedisplayed = function () {
    return act.pagedisplayed(this._element, this.name, this.pagename)
};
Dropdown.prototype.selectOption = function (option) {
    return act.sendkeys(this._element, this.name, option)
};
Table.prototype.visible = function () {
    return act.visible(this._elem, this.name)
};
TableCells.prototype.verifyRowText = function (text) {
    return act.verifyRowText(this._elem, this.name, text)
};
TableCells.prototype.verifySorting = function (sorting, order) {
    return act.verifySorting(this._elem, this.name, sorting, order)
};
TableRows.prototype.verifyRowsCount = function (count) {
    return act.verifyRowsCount(this._elem, this.name, count)
};

module.exports =
    {
        Textbox: Textbox,
        Button: Button,
        Link: Link,
        Image: Img,
        Dropdown: Dropdown,
        Page: Page,
        Table: Table,
        TableRows: TableRows,
        TableCells: TableCells
    };