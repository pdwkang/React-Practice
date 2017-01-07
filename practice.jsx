// var sportingGoods = [
//     {
//         name: "Football",
//         price: "$49.99"
//     },
//     {
//         name: "Baseball",
//         price: "$9.99"
//     },
//     {
//         name: "Basketball",
//         price: "$29.99"
//     }
// ]

// var electronics = [
//     {
//         name: "iPod Touch",
//         price: "$99.99"
//     },
//     {
//         name: "iPhone 5",
//         price: "$399.99"
//     },
//     {
//         name: "Nexus 7",
//         price: "$199.99"
//     }
// ]

// function Sport(props){
// 	return(
//         <div className="eachSport">
//         	<div className="left">{props.name}</div>
//         	<div className="right">{props.price}</div>
//         </div>		
// 	)
// }



// function Wrapper(props){
//     return(
//         <div className="wrapper">
//         	<div className="searchBar">
//         		<input placeholder="Search..." />
//         	</div>
//         	<div className="productTable>">
//    				<div className="sportHeader">
//    					<div className="left">Name</div>
//    					<div className="right">Price</div>
//    				</div> 
//    			</div>

// 			<div className="category">
// 				<div className="sportingGoods">
// 					{props.sportingGoods.map((sport, index) => {
// 						return <Sport key={index} name={sport.name} price={sport.price} />
// 						})
// 					}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }   	




// ReactDOM.render(
//     <Wrapper sportingGoods={sportingGoods} />, 
//     document.getElementById('container')
// )





var products =[
	{
		category: 'Sporting Goods',
		price: '$49.99',
		name: 'Football',
		inStock: true
	},
	{
		category: 'Sporting Goods',
		price: '$9.99',
		name: 'Baseball',
		inStock: true
	},
	{
		category: 'Sporting Goods',
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},
	{
		category: 'Electronics',
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
		category: 'Electronics',
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true
	}		
]

// we arent using a class yet. so we have to include props as a param
// because there is no "this"
function ProductCategoryRow(props){
	return(
		<tr>
			<td>{props.category}</td>
		</tr>
	)
}

function ProductRow(props){
	if(props.product.inStock){
		var productClass = "text-success"
	}else{
		var productClass = "text-danger"
	};
	return(
		<tr>
			<td className={productClass}>{props.product.name}</td>
			<td className={productClass}>{props.product.price}</td>
		</tr>
	)
}

function ProductTable(props){
	// Init a local var to hold all our rows
	var rows = [];
	// Init a local var to keep track of what category we are on
	var lastCategory = "";
	var key = 0;
	products.forEach(function(product, index){
		if(product.category !== lastCategory){
			// we need to add this to our rows array because its a new category
			rows.push(<ProductCategoryRow key={key} category={product.category} />)
			lastCategory = product.category;
			key++;
		}
		rows.push(<ProductRow key={key} product={product} />)
		key++;
	})
//rows is 8 items, category and 3 products and new category and 3 products
	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}

function SearchBar(props){
	return(
		<form className="search-bar">
			<input type="text" placeholder="Search..."/>
			<div>
				<input type="checkbox" /> &nbsp; Only show products in stock
			</div>
		</form>
	)
}


function FilterableProductTable(props){
	return(
		<div className="filterable-product-table">
			<SearchBar />
			<ProductTable />
		</div>
	)
}

function Application(props){
	// must return a single virtual dom element
	return(
		<FilterableProductTable />
	)
}

ReactDOM.render(
    <Application />, 
    document.getElementById('container')
)




