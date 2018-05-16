class Api {
    constructor() {
    }


    fetch() {
        return $.ajax({
            method: "GET",
            url: "/cards"
        });

    }
}
export default Api;