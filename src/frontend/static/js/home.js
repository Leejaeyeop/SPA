export default new (class {
    constructor() {
        document.title = "Home";
    }
    async getHtml() {
        return `
            <div><h1>This is Home Page</h1></div>
        `;
    }
})();
