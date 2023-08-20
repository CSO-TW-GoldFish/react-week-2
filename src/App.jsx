import MenuItem from './components/MenuItem'
import menuData from './data/menuData'

function App() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
			{menuData.map((item) => {
				return (
					<MenuItem
						key={item.id}
						name={item.name}
						description={item.description}
						price={item.price}
					/>
				)
			})}
            
          </div>
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" width="50">操作</th>
                  <th scope="col">品項</th>
                  <th scope="col">描述</th>
                  <th scope="col" width="90">數量</th>
                  <th scope="col">單價</th>
                  <th scope="col">小計</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><button type="button" className="btn btn-sm">x</button></td>
                  <td>四季春茶</td>
                  <td><small>香醇四季春茶，回甘無比</small></td>
                  <td>
                    <select className="form-select">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>45</td>
                  <td>45</td>
                </tr>
                <tr>
                  <td><button type="button" className="btn btn-sm">x</button></td>
                  <td>翡翠檸檬</td>
                  <td><small>綠茶與檸檬的完美結合</small></td>
                  <td>
                    <select className="form-select">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>55</td>
                  <td>55</td>
                </tr>
              </tbody>
            </table>
            <div className="text-end mb-3">
              <h5>總計: <span>$100</span></h5>
            </div>
            <textarea
              className="form-control mb-3"
              rows="3"
              placeholder="備註"
            ></textarea>
            <div className="text-end">
              <button className="btn btn-primary">送出</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h5>訂單</h5>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">品項</th>
                        <th scope="col">數量</th>
                        <th scope="col">小計</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>翡翠檸檬</td>
                        <td>7</td>
                        <td>385</td>
                      </tr>
                      <tr>
                        <td>冬瓜檸檬</td>
                        <td>7</td>
                        <td>315</td>
                      </tr>
                      <tr>
                        <td>冬瓜檸檬</td>
                        <td>4</td>
                        <td>180</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-end">備註: <span>都不要香菜</span></div>
                  <div className="text-end">
                    <h5>總計: <span>$145</span></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

export default App
