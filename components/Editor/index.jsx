import 'quill-mention';
import 'quill-emoji';

import {
  useCallback,
  useMemo,
  useState,
} from 'react';

import ReactQuill from 'react-quill';

export default function Editor(){
    const [value, setValue] = useState('');

    const atValues = useMemo(() =>([
    { id: 1, value: "Fredrik Sundqvist", link: "https://www.google.com", target:'_blank' },
    { id: 2, value: "Patrik Sjölin", link: "https://www.google.com", target:'_self' }
    ]),[]);

    const hashValues = useMemo(() =>([
        { id: 3, value: "Fredrik Sundqvist 2", link: "www.google.com",target:'_self' },
        { id: 4, value: "Patrik Sjölin 2", link: "https://www.google.com",target:'_self' }
    ]),[]);

    const mentionLogic = useCallback((searchTerm, renderList, mentionChar) => {
        let values;

        if (mentionChar === "@") {
        values = atValues;
        } else {
        values = hashValues;
        }

        if (searchTerm.length === 0) {
        renderList(values, searchTerm);
        } else {
        const matches = [];
        for (let i = 0; i < values.length; i++)
            if (
            ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
            )
            matches.push(values[i]);
        renderList(matches, searchTerm);
        }
    },[atValues, hashValues]);

    const modules = useMemo(() => ({
        toolbar: [
        [{ 'header': [1, 2,false] }],
        ['bold', 'italic', 'underline','strike' ],
        [],
        [],
        ['link', 'image'],
        [],
        [],
        ['code-block', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [],
        [],
        ],
        "emoji-toolbar": false,
        "emoji-textarea": true,
        "emoji-shortname": true,
        mention: {
        allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
        mentionDenotationChars: ["@", "#"],
        source: mentionLogic,
        linkTarget: '_self',
        // renderItem:(item, searchTerm) => {
        //   return (<span>{`1 ${item.value} ${searchTerm.value}`}</span>)
        // }
    }}),[mentionLogic]);

    const formats = useMemo(() => ([
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'code',
        'link', 'image', 'mention', 'emoji'
    ]),[]);

    const onChange=(content) => {
        console.log("content", content);
        setValue(content);
    }

    return (
        <>
        <ReactQuill 
            value={value} 
            onChange={onChange} 
            modules={modules}
            formats={formats} 
            placeholder="Type your text here..."
        />
        <ReactQuill 
            value={value} 
            // onChange={onChange} 
            modules={modules}
            formats={formats}
            theme="bubble" 
            readOnly
        />
        </>
    );
}