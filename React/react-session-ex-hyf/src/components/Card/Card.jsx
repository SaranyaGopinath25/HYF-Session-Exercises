import styles from "./Card.module.css";
import Layout from "../Layout.jsx";


const Card = (props) => {
    const {title, description, imgUrl } = props;
    return(
        <Layout>

            <div className={styles.card}>
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={imgUrl} alt="card image" className={styles.cardImage} />
            </div>

        </Layout>

        
    )
}

export default Card;