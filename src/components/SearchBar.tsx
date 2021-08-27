const SearchBar = () => {

	return (
		<form>
			<input
				placeholder='Search...'
			/>
			<p>
				<input
					type='checkbox'
				/>
				<span> Only show products in stock </span>
			</p>
		</form>
	)
}

export default SearchBar