
import styled from 'styled-components'
export const CardMain = styled.div`
     border: 1px solid #ddd;
    & .card-body {
        background: #fff;
        padding: 24px;
        
    }
    & .card-title {
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        padding: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        border-bottom: 1px solid #ddd;
        align-items: center;
        justify-content: space-between;
        & h4 {
            margin: 0
        }
    }
    & .card-footer {
        padding: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        border-top: 1px solid #ddd;
    }
    img {
        max-width: 100%;
    }
    .card-actions {
        padding: 16px 0;
        list-style: none;
        display: flex;
        align-items: center;
        border-top: 1px solid #ddd;
        margin: 0;
        .action-item {
            width: 33.333%;
            border-right: 1px solid #ddd;
            text-align: center;
        }
    }


`
export const MetaCard = styled.div`
    .meta-title{
        margin-top: 0;
        margin-bottom: 8px;

    }
    .card-avatar {
        float: left;
        padding-right: 16px;
    }
    .meta-description{
        margin: 0;
    }
    .card-meta-detail {
        overflow: hidden;
    }
`