import InnerWrapper from "@/components/inner-wrapper";
import styles from './otherPage.module.css'

export default async function OtherPage(){
    return <InnerWrapper>
        <h1 className={styles.h1}>Other Page Title</h1>
    </InnerWrapper>
}