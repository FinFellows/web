import React, { useCallback, useMemo, useState } from 'react';
import { Descendant, createEditor } from 'slate';

import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import isHotkey from 'is-hotkey';
import { toggleMark } from '@/libs/editor/toggleMark';
import SlateElement from './slateElement';
import SlateLeaf from './slateLeaf';
import HOTKEYS from '@/constants/editor/hotkeys';
import { TPluginFormat } from '@/types/editor/editorType';
import Preview from './plugins/preview';
import Tools from './tools';
import BackDrop from '@/components/organisms/modal/backdrop';
import WithStopPropagation from '@/components/utils/withStopPropagation';
import ModalView from '@/components/organisms/modal/modalView';

export default function Editor({
  mode,
  title,
  content,
  closeEditor,
  handleUpload,
}: {
  mode: 'edit' | 'create';
  title?: string;
  content?: string;
  closeEditor: () => void;
  handleUpload: (title: string, content: string) => void;
}) {
  const initialValue: Descendant[] = [
    {
      type: 'paragraph',
      children: [{ text: mode === 'edit' ? content : '오늘의 이야기...' }],
    },
  ];
  const renderElement = useCallback((props: any) => <SlateElement {...props} />, []);
  const renderLeaf = useCallback((props: any) => <SlateLeaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [editorValue, setEditorValue] = useState<Descendant[]>(initialValue);
  const [activatedPlugin, setActivatedPlugin] = useState<TPluginFormat | null>(null);
  const titleRef = React.useRef<HTMLInputElement>(null);
  console.log(editorValue);

  function handleChangeEditorValue(value: Descendant[]) {
    // setEditorValue([...value, { type: 'paragraph', children: [{ text: 'ㄴㄴㄴ' }] }]);
  }

  function handleCloseEditor() {
    // 물어보고 종료
    confirm('작성을 종료하시겠습니까?') && closeEditor();
  }
  return (
    <BackDrop>
      <ModalView className='p-40 mx-auto w-full h-[calc(100vh-100px)] max-w-[1024px] post-box'>
        {/* 상단 버튼 */}
        <div className='flex items-center justify-end gap-20'>
          <button
            onClick={handleCloseEditor}
            className='flex justify-center items-center px-20 py-8 text-16 text-main font-bold rounded-4 border-1 border-main'
          >
            취소
          </button>
          <button className='flex justify-center items-center px-20 py-8 text-16 text-main font-bold rounded-4 border-1 border-main'>
            임시 저장
          </button>
          <button className='flex justify-center items-center px-20 py-8 text-16 text-white bg-main font-bold rounded-4 border-1 border-main'>
            업로드
          </button>
        </div>
        {/* 제목 */}
        <input
          type='text'
          autoComplete='off'
          spellCheck='false'
          placeholder='제목을 입력하세요'
          className='w-full mb-50 p-20 text-48 font-bold box-border placeholder:text-page1 outline-none'
          style={{ borderBottom: '1px solid #f0f0f5' }}
          defaultValue={mode === 'edit' ? title : undefined}
          ref={titleRef}
        />

        <div className='flex flex-col items-start'>
          <Slate editor={editor} initialValue={editorValue} onChange={handleChangeEditorValue}>
            <Tools activatedPlugin={activatedPlugin} setActivatedPlugin={setActivatedPlugin} />

            {/* h-calc (Toolbar 위에 고정 시키기 위한 높이 설정) */}
            {/* 전체 높이(100vh) - 위에서 임의로 빼준 값(100) - box 위,아래 padding(80) - 임시저장 버튼 높이(42) - input 높이(163) - Toolbar(margin 포함)(40) -  */}
            <div className=' overflow-y-scroll h-[calc(100vh-100px-80px-42px-163px-40px)] w-full'>
              <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder='오늘의 이야기...'
                autoFocus
                onKeyDown={(event) => {
                  for (const hotkey in HOTKEYS) {
                    if (isHotkey(hotkey, event as any)) {
                      event.preventDefault();
                      const mark = HOTKEYS[hotkey];
                      toggleMark(editor, mark);
                    }
                  }
                }}
                className='outline-none prose w-full max-w-full '
              ></Editable>
            </div>
            {activatedPlugin === 'preview' && (
              <Preview
                title={titleRef.current?.value}
                editorValue={editorValue}
                closePreview={() => setActivatedPlugin(null)}
                className='mx-auto w-full h-[calc(100vh-100px)] max-w-[1024px] '
              />
            )}
          </Slate>
        </div>
      </ModalView>
    </BackDrop>
  );
}