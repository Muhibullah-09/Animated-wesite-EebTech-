import React from 'react'
import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
function Contact() {
    const { ref } = useWebAnimations({ ...heartBeat })

    return (
        <>
            <div className="float-md-right">
                <img src='https://tilakthakurdot.files.wordpress.com/2017/11/contact-1.gif' class="rounded float-left" alt="logo"></img>
            </div>
            <div>
                <form style={{ width: '500px', margin: '100px', padding: 0 }}>
                    <h1 ref={ref}><strong>Contact Us</strong></h1>
                    {/* <!-- Name input --> */}
                    <div class="form-outline mb-4">
                        {/* <h1 ref={ref}><strong>Contact Us</strong></h1> */}
                        <input type="text" id="form4Example1" class="form-control" />
                        <label class="form-label" for="form4Example1">Name</label>
                    </div>
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                        <input type="email" id="form4Example2" class="form-control" />
                        <label class="form-label" for="form4Example2">Email address</label>
                    </div>
                    {/* <!-- Message input --> */}
                    <div class="form-outline mb-4">
                        <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                        <label class="form-label" for="form4Example3">Message</label>
                    </div>
                    {/* <!-- Checkbox --> */}
                    <div class="form-check d-flex justify-content-center mb-4">
                        <input
                            class="form-check-input mr-2"
                            type="checkbox"
                            value=""
                            id="form4Example4"
                        />
                        <label class="form-check-label" for="form4Example4">
                            Send me a copy of this message
                            </label>
                    </div>
                    {/* <!-- Submit button --> */}
                    <button type="submit" class="btn btn-primary btn-block mb-4">
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact
