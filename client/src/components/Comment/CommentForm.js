import React, { useState } from 'react';
import { ADD_COMMENT_ACTIVITY} from '../../utils/mutations';
import { usemutation } from '@apollo/client';

// component for comment modal
const CommentForm = ({ activityId }) => {

    const [commentText, setCommentText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    // function to use mutation to add a comment
    const [addComment, { error}] = useMutation(ADD_COMMENT_ACTIVITY);

    // handle form function for adding a comment
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addComment({
            variables: { thoughtId, commentText },
          });
    
          setCommentText('');
        } catch (err) {
          console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'commentText' && value.length <= 280) {
        setCommentText(value);
        setCharacterCount(value.length);
        }
    };

    // do I need a function for opening the modal
    return (
        <div>
             {/* Button trigger modal  */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Comment
            </button>

            {/* Modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Add your comment</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p
                      className={`m-0 ${
                      characterCount === 280 || error ? 'text-danger' : ''
                      }`}
                    >
                      Character Count: {characterCount}/280
                      {error && <span className="ml-2">Something went wrong...</span>}
                    </p>
                    <form
                        className="flex-row justify-center justify-space-between-md align-center"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="col-12 col-lg-9">
                        <textarea
                            name="commentText"
                            placeholder="Add your comment..."
                            value={commentText}
                            className="form-input w-100"
                            style={{ lineHeight: '1.5' }}
                            onChange={handleChange}
                        ></textarea>
                        </div>
                      {/* Does a button have to be in the form in order to work? */}
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    {/* add handle event for post button */}
                    <button type="submit" className="btn btn-primary">Post</button>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default CommentForm;