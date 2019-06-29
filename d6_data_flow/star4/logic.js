const App = () => {
  const [currentCategory, setCurrentCategory] = React.useState('Movies')
  const data = {
    "Movies": ["The Lion KIng", "Return Of Mufasa", "Revenge of Bambi"],
    "Games": ["Skyrim: monster killer", "The witcher and the dragon", "Warcraft Heart of stone"],
    "Books": ["LOTR was gay", "Star tract", "Being a super sensitive and just plain better person than the rest"]
  }
  let categoryData = [Object.keys(data)[0], Object.keys(data)[1], Object.keys(data)[2]];
  let subCategoryData = [data[currentCategory][0], data[currentCategory][1], data[currentCategory][2]];
  return (
    <div>
      <Category title="Category" handleChange={setCurrentCategory} data={categoryData}></Category>
      <Category title="Sub category" handleChange={() => { }} data={subCategoryData}></Category>
    </div>
  )
}
const Category = ({ title, data, handleChange }) => {
  return (
    <div className="category">
      <h4>{title}</h4>
      <select onChange={(e) => { handleChange(e.target.value) }}>
        <option value={data[0]}>{data[0]}</option>
        <option value={data[1]}>{data[1]}</option>
        <option value={data[2]}>{data[2]}</option>
      </select>
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);