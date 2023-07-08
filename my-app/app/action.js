import Like from "./likes.js";
import Dislike from "./dislike.js";
import Delete from "./delete.js";
function Action(){
    return(
        <div className="rating">
            <Like />
            <Dislike /> 
            <Delete  />       
        </div>


);

}
export default Action; 

