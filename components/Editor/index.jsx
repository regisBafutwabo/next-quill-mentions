import 'quill-mention';
import 'quill-emoji';

import {
    useMemo,
    useState,
} from 'react';

import QuillAutoDetectUrl from 'quill-auto-detect-url';
import ReactQuill, { Quill } from 'react-quill';

Quill.register("modules/autoDetectUrl", QuillAutoDetectUrl);

export default function Editor() {
    const [value, setValue] = useState('');
    const [delta, setDelta] = useState();

    // const [mentionned, setMentionned] = useState([])

    // const atValues = useMemo(() => ([
    //     { id: 1, value: "Fredrik Sundqvist", link: "https://www.google.com" },
    //     { id: 2, value: "Patrik Sjölin", link: "https://www.google.com" }
    // ]), []);

    // const hashValues = useMemo(() => ([
    //     { id: 3, value: "Fredrik Sundqvist 2", link: "https://www.google.com" },
    //     { id: 4, value: "Patrik Sjölin 2", link: "https://www.google.com" }
    // ]), []);

    // const mentionLogic = useCallback((searchTerm, renderList, mentionChar) => {
    //     let values;

    //     if (mentionChar === "@") {
    //         values = atValues;
    //     } else {
    //         values = hashValues;
    //     }

    //     if (searchTerm.length === 0) {
    //         renderList(values, searchTerm);
    //     } else {
    //         const matches = [];
    //         for (let i = 0; i < values.length; i++)
    //             if (
    //                 ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
    //             )
    //                 matches.push(values[i]);
    //         renderList(matches, searchTerm);
    //     }
    // }, [atValues, hashValues]);

    // const onMentionSelect = useCallback((item, insertItem) => {
    //     if (mentionned.includes(item.id)) {
    //         setMentionned(prev => ([...prev, item.id]))
    //     }
    //     insertItem(item);
    // }, []);

    const modules = useMemo(() => ({
        toolbar: [
            // [{ 'header': [1, 2, false] }],
            ['bold'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['image', 'link'],
        ],
        "emoji-toolbar": false,
        "emoji-textarea": false,
        "emoji-shortname": false,
        autoDetectUrl: {
            urlRegularExpression: /(https?:\/\/|www\.)[\w-.]+\.[\w-.]+[\S]+/i,
        },
        // mention: {
        //     allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
        //     mentionDenotationChars: ["@", "#"],
        //     source: mentionLogic,
        //     linkTarget: '_blank',
        //     onSelect: onMentionSelect,
        //     // renderItem:(item, searchTerm) => {
        //     //   return (<span>{`1 ${item.value} ${searchTerm.value}`}</span>)
        //     // }
        // }
    }), []);

    const formats = useMemo(() => ([
        'header',
        'bold',
        'list', 'bullet',
        'link', 'image'
    ]), []);

    const onChange = (content, delta, source, editor) => {

        const contents = editor.getContents();
        console.log("content", typeof content);
        setDelta(JSON.stringify(editor.getContents()))
        console.log('\n\n\ndelta', delta)
        // setDelta(contents);
        setValue(content);
    };

    return (
        <>
            <ReactQuill
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                // onFocus={() => setFocus(true)}
                // theme={!value && notFocused ? "bubble" : "snow"}
                placeholder="게시글 내용을 입력해주세요."
            />
            <div style={{ padding: 16 }}>Editor result view here:
                <ReactQuill
                    value={value}
                    modules={{ ...modules }}
                    formats={formats}
                    theme="bubble"
                    readOnly
                />
            </div>
        </>
    );
}