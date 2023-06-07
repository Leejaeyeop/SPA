export default new (class {
    constructor() {
        document.title = "Post";
    }
    async getHtml() {
        return `
        <div><h1>This is Post Page</h1></div>
        `;
    }
})();
