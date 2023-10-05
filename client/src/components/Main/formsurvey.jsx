import '../../assets/css/survey.css';

export const Formsurvey = () => {
    return (
        <div class="box">
            <div class="head">
                Survey
            </div>
            <form>
                <div>
                    <div>
                        <p>Full Name</p>
                        <input type="text" name="First Name" placeholder="First Name" className="name" />
                        <input type="text" name="Last Name" placeholder="Last Name" class="name" />
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="email" name="email" placeholder="example@gmail.com" class="mail" />
                    </div>
                    <div>
                        <p>Message</p>
                        <p class="m"><input type="text" name="message" class="message" /></p>
                    </div>
                    <div class="boxbutton">
                        <button>Submit</button>
                    </div>
                </div>
            </form >
        </div>
    )
}