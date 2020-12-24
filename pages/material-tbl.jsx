import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import Layout from '../components/layout';

export default () => {
    return (
        <Layout>
            <div style={{ maxWidth: '50%' }}>
            <MaterialTable
                columns={[
                    { title: 'Ad', field: 'name' },
                ]}
                data={[{ name: 'mehmet' }]}
                title="Demo"
            />
            </div>
        </Layout>
    );
};
