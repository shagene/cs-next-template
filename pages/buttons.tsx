import Head from 'next/head'

import ContainedButtons from  '../components/buttons/ContainedButtons';
import IconButtons from "../components/buttons/IconButtons";
import OutlinedButtons from "../components/buttons/OutlinedButtons";
import LoadingButtons from "../components/buttons/LoadingButtons";
import TextButtons from "../components/buttons/TextButtons";

export default function ButtonsComponent() {
    return (
        
        <>
        <Head>
        <title>Buttons Page</title>
        <meta name="description" content="CS Buttons Component Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <ContainedButtons />
            <OutlinedButtons />
            <TextButtons />
            <IconButtons />
            <LoadingButtons />
            <ContainedButtons />
            <OutlinedButtons />
            <TextButtons />
            <IconButtons />
            <LoadingButtons />
        </>
    );
}
