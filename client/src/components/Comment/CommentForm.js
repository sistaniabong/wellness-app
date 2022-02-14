// import React, { useState } from 'react';
// import { ADD_COMMENT_ACTIVITY} from '../../utils/mutations';
// import { usemutation } from '@apollo/client';
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";

// // component for comment modal
// const CommentForm = ({ activityId }) => {

//     const [commentText, setCommentText] = useState('');
//     const [characterCount, setCharacterCount] = useState(0);
//     // function to use mutation to add a comment
//     const [addComment, { error}] = useMutation(ADD_COMMENT_ACTIVITY);

//     // handle form function for adding a comment
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
    
//         try {
//           const { data } = await addComment({
//             variables: { thoughtId, commentText },
//           });
    
//           setCommentText('');
//         } catch (err) {
//           console.error(err);
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         if (name === 'commentText' && value.length <= 280) {
//         setCommentText(value);
//         setCharacterCount(value.length);
//         }
//     };

//     return (
//       <>
//         <button
//           className="m-6 waves-effect waves-light btn-floating"
//           style={{ borderRadius: "10px", width: "50px" }}
//           onClick={showModal}
//         >
//       123
//         </button>
//         <Modal show={isOpen} onHide={hideModal} dialogClassName="modal-90w">
//           <Modal.Header>
//             <Modal.Title>Add your Comment</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p
//                       className={`m-0 ${
//                       characterCount === 280 || error ? 'text-danger' : ''
//                       }`}
//                     >
//                       Character Count: {characterCount}/280
//                       {error && <span className="ml-2">Something went wrong...</span>}
//                     </p>
//                     <form
//                         className="flex-row justify-center justify-space-between-md align-center"
//                         onSubmit={handleFormSubmit}
//                     >
//                         <div className="col-12 col-lg-9">
//                         <textarea
//                             name="commentText"
//                             placeholder="Add your comment..."
//                             value={commentText}
//                             className="form-input w-100"
//                             style={{ lineHeight: '1.5' }}
//                             onChange={handleChange}
//                         ></textarea>
//                         </div>
//                       {/* Does a button have to be in the form in order to work? */}
//                     </form>
//           </Modal.Body>
//           <Modal.Footer>
//             <button
//               className="m-6 waves-effect waves-light btn-floating"
//               style={{ borderRadius: "10px", width: "65px" }}
//               onClick={hideModal}
//             >
//               Cancel
//             </button>
//             <button
//               className="m-6 waves-effect waves-light btn-floating"
//               style={{ borderRadius: "10px", width: "50px" }} type="submit"
//             >
//               Post
//             </button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
// }

// export default CommentForm;