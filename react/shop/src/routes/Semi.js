import { useEffect } from "react";
import { useParams } from "react-router-dom";




 function Semi(props) {
   
   let {id} = useParams();
  //  let 찾은상품 = props.shoes.find(function(x){
  //   return x.id == id;
  //  })
  let 찾은상품 = props.shoes.find((x)=> x.id ==id);
  
   // .find() 문법을 사용하면 array자료 안에서 원하는 항목만 가져올 수 있다
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Semi;