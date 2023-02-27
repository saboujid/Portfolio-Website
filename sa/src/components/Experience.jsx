import work from '../assets/work.png'
import study from '../assets/study.png'

export default function Experience() {
    return (
        <div className="Experience" id="experience">
            <h1>Experience</h1>

            <div className="timeline">
                <div className="line">
                </div>
                <div className="content content-1">
                    <section>
                        <div className="icon">
                            <img src={work} />
                        </div>
                        <div className="details">
                            <span> 2022 - Present</span>
                            <h3>Werkstudent in Marketing Tech - Vitafy GmbH</h3>
                        </div>
                        <p><ul>
                            <li>Implemented various templates for marketing promotions with Smarty</li>
                            <li>Supported the migration of Google Ads scripts to the New Script Experience</li>
                            <li>Created various Google Ads scripts </li>
                            <li>Supported in the migration from UA to Google Analytics 4 </li>
                            <li>Handled various pixel setups (GTM)</li>
                        </ul></p>
                    </section>
                </div>

                <div className="content content-1">
                    <section>
                        <div className="icon">
                            <img src={study} />
                        </div>
                        <div className="details">
                            <span> 2020 - 2023</span>
                            <h3>BSc Degree - Jacobs University Bremen</h3>
                        </div>
                        <p> <span>Major : </span> Computer Science
                            <br />
                            <span>Minor : </span> Global Economics and Management.</p>
                    </section>
                </div>

                <div className="content content-1">
                    <section>
                        <div className="icon">
                            <img src={work} />
                        </div>
                        <div className="details">
                            <span> 2020 - 2021</span>
                            <h3>E-commerce Business Owner - @FaborExpress</h3>
                        </div>
                        <p>During the beginning of COVID-19, many advertisers on META paused their ads, causing a significant decrease in advertising costs. My brother and I seized this opportunity to start a local e-commerce business.
                           <br /> While most online businesses tried to sell hair trimmers for men, we decided to tap into a blue ocean by selling women's wax. <br /> By applying Alex Hormozi's value equation, we packaged our product in a bundle with a perceived value much higher than the selling price. Our strategy paid off, as we made two sales on the first day and quickly grew to an average of 35 sales per day within the first week.
                        </p>
                    </section>
                </div>


            </div>
        </div>
    )
}