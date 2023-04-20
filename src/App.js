import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import MembersCard from './component/MembersCard';
import { memberAction } from './redux/actions/memberAction';

function App() {

  const {membersList, loading} = useSelector((state) => state.members);
  console.log("membersList?", membersList);

  const dispatch = useDispatch();
  
  useEffect(()=>{
    console.log("check");
    dispatch(memberAction.getData());
  }, [])


  if(loading){
    return (
      <ClipLoader
      color="#000"
      loading={loading}
      size={150}
    />
    )
  } else {
    return (
      <table className='tbl'>
        <colgroup>
          <col width={"14%"}/>
          <col width={"14%"}/>
          <col width={"14%"}/>
          <col width={"14%"}/>
          <col width={"14%"}/>
          <col width={"14%"}/>
          <col width={"14%"}/>
        </colgroup>
        <thead>
          <tr>
            <td>번호</td>
            <td>등번호</td>
            <td>이름</td>
            <td>티어</td>
            <td>경기수</td>
            <td>골</td>
            <td>어시</td>
          </tr>
        </thead>
        <tbody>
          {/* {
            membersList.map((item, index) => (
              <MembersCard item={item} index={index} />
            ))
          } */}
        </tbody>
      </table>
    );
  }

  
}

export default App;
