const UserData = ({users}) => {
    return (
        <>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {
                users.map((curUser) => {
                    const {id, name, email} = curUser;
                    const {street, city, zipcode} = curUser.address;

                    return (
                        <tr  scope='row'key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{street}, {city}, {" "}, {zipcode}</td>
                        </tr>
                    )
                })

            }
    
  </tbody>
</table>
            
        </>
    )
}
export default UserData;