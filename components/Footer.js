import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.details}>
                    <div className={styles.quickLinks}>
                        <p>Quick Links</p>
                        <ul>
                            <li>About Ishami Factory</li>
                            <li>Executive Team</li>
                            <li>The How</li>
                            <li>Products</li>
                            <li>Contact</li>
                            <li>Tenders/Jobs</li>
                        </ul>
                    </div>
                    <div className={styles.departmentLinks}>
                        <p>Department Link</p>
                        <ul>
                            <li>
                                <span>Front Desk</span>
                                <br />
                                <span><a href="mailto:enquiry@ishamifactory.rw" className={styles.email}>enquiry@ishamifactory.rw</a></span>
                            </li>
                            <li>
                                <span>Business &amp; Administration</span>
                                <br />
                                <span><a href="mailto:enquiry@ishamifactory.rw" className={styles.email}>enquiry@ishamifactory.rw</a></span>
                            </li>
                            <li>
                                <span>Manufacturing &amp; Sales</span>
                                <br />
                                <span><a href="mailto:enquiry@ishamifactory.rw" className={styles.email}>enquiry@ishamifactory.rw</a></span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.office}>
                        <p>Office</p>
                        <span className={styles.countryOffice}>Rwanda</span>
                        <ul>
                            <li>Economic Zone</li>
                            <li>Kigali, Rwanda</li>
                            <li>(+250) 788 31 000 000</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.socials}>
                    <p>Social Media</p>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
            <p className={styles.copyright}>&copy; 2022 . Ishami Factory</p>
        </div>
    )
}

export default Footer
