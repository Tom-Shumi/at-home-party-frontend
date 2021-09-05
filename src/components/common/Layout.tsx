import React from 'react';
import Head from 'next/head';
import Header from 'components/common/Header';
import Footer from 'components/common//Footer';

interface LayoutProps {
    title: string;
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <Header title={props.title} />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;
