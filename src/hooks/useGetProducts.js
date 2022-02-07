import  {useEffect,useState} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);
    useEffect(async () => {
		const response = await axios.get(API);
		setProducts(response.data);
		//console.log(response.data);
	},[]);

    return products;
}

export default useGetProducts;