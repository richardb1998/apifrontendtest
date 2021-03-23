class deleterequester {
    async delete(url, username, password) {
        const response = await fetch((url + "?username=" + username + "&password=" + password), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: {'username':username,
                   'password':password}
        });
        return response
    }
}