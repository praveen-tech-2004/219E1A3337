async function fetchTopProducts(categoryName, n, page, sort) {
    try {
        const { token_type, access_token } = {
            "token_type": "Bearer",
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE2NjE0NzM1LCJpYXQiOjE3MTY2MTQ0MzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFkMzFiM2I3LTE1ZTItNGNmZS05MDVkLTc0MTE4MTJlNzc4NyIsInN1YiI6IjIwMjFjc20ucjM3QHN2ZWMuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiIxZDMxYjNiNy0xNWUyLTRjZmUtOTA1ZC03NDExODEyZTc3ODciLCJjbGllbnRTZWNyZXQiOiJ3bkZ2RG9obkpPU0pBV1V1Iiwib3duZXJOYW1lIjoiUHJhdmVlbiIsIm93bmVyRW1haWwiOiIyMDIxY3NtLnIzN0BzdmVjLmVkdS5pbiIsInJvbGxObyI6IjIxOUUxQTMzMzcifQ.8aLRmUODGpK9a6yU8L48PrPTHDPsO_jT5ulQ_qUVeTI",
            "expires_in": 1716614735
        }; 

        const response = await axios.get(`http://20.244.56.144/test/categories/${categoryName}/products`, {
            headers: {
                'Authorization': `${token_type} ${access_token}`
            },
            params: {
                n,
                page,
                sort
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching top products:', error.message);
        throw new Error('Failed to fetch top products');
    }
}

async function fetchProductDetails(categoryName, productId) {
    try {
        const { token_type, access_token } = {
            "token_type": "Bearer",
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE2NjE0NzM1LCJpYXQiOjE3MTY2MTQ0MzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFkMzFiM2I3LTE1ZTItNGNmZS05MDVkLTc0MTE4MTJlNzc4NyIsInN1YiI6IjIwMjFjc20ucjM3QHN2ZWMuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiIxZDMxYjNiNy0xNWUyLTRjZmUtOTA1ZC03NDExODEyZTc3ODciLCJjbGllbnRTZWNyZXQiOiJ3bkZ2RG9obkpPU0pBV1V1Iiwib3duZXJOYW1lIjoiUHJhdmVlbiIsIm93bmVyRW1haWwiOiIyMDIxY3NtLnIzN0BzdmVjLmVkdS5pbiIsInJvbGxObyI6IjIxOUUxQTMzMzcifQ.8aLRmUODGpK9a6yU8L48PrPTHDPsO_jT5ulQ_qUVeTI",
            "expires_in": 1716614735
        }; 

        const response = await axios.get(`http://20.244.56.144/test/categories/${categoryName}/products/${productId}`, {
            headers: {
                'Authorization': `${token_type} ${access_token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error.message);
        throw new Error('Failed to fetch product details');
    }
}
