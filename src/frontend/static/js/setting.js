export default new (class {
    constructor() {
        document.title = "Setting";
    }
    async getHtml() {
        return `
        <div><h1>This is Setting Page</h1></div>
        `;
    }
})();
