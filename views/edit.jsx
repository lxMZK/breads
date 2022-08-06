const React = require('react')
const Default = require('./layouts/Default')

function edit(data) {
  return (
    <Default>
      <h2>Edit</h2>
      <form action={`/breads/${data.bread.id}?_method=PUT`} method="POST">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.bread.name}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={data.bread.image}
          />
        </div>
        <div>
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
          />
        </div>
        <div>
          <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker">
            {data.bakers.map((baker)=>{
              return(
                <option value={baker.id} key={baker.id}>{baker.name}</option>
              )
            })}
          </select>
        </div>
        <input type="submit" value='submit' />
      </form>
      <div className='backButton'>
        <a href='/breads'><button>Go back to the index</button></a>
      </div>
    </Default>
  )
}

module.exports = edit
