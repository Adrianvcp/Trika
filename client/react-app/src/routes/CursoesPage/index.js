import React from 'react';
import Cursos from "../../components/Cursos";
import Layout from '../../components/Layout';

class CursoesPage extends React.Component {

    render() {
        return (
            <Layout>
                <Cursos/>
            </Layout>
        )
    }
}

export default CursoesPage;