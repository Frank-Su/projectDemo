/**
 * Author: Andy
 * Date: 09/06/2020
 */

import React, { useState } from 'react';

import styles from '../../../style/componentStyle/sdComponentStyle/reusableStyle/script.scss';

interface ScriptProps {}
const Script = (props: ScriptProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const scriptMaskingContent: any = (
    <div>
      <p className={styles.ekasScriptMaskingTitle}>Code mask</p>
      <textarea
        className={styles.ekasScriptMaskingContent}
        style={{ resize: 'none', height: '10rem' }}
      />
      <p className={styles.ekasScriptMaskingTitle}>Question mask</p>
      <textarea
        className={styles.ekasScriptMaskingContent}
        style={{ resize: 'none', height: '10rem' }}
      />
    </div>
  );
  const scriptCustomValidationContent: any = (
    <div>
      <textarea
        className={styles.ekasScriptMaskingContent}
        style={{ resize: 'none', height: '20rem' }}
      />
    </div>
  );
  const scriptJavaScriptContent: any = (
    <div>
      <textarea
        className={styles.ekasScriptMaskingContent}
        style={{ resize: 'none', height: '20rem' }}
      />
    </div>
  );
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
  const [scriptTagContent, setScriptTagContent] = useState<any>(
    scriptMaskingContent
  );
  const [scriptSelectedTag, setScriptSelectedTag] = useState<string>('m');
  /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

  return (
    <div>
      <div className={styles.ekasScriptTagWrapper}>
        <span
          className={
            scriptSelectedTag == 'm'
              ? styles.ekasScriptTagSelected
              : styles.ekasScriptTagNormal
          }
          onClick={() => {
            setScriptSelectedTag('m');
            setScriptTagContent(scriptMaskingContent);
          }}
        >
          Masking
        </span>
        <span
          className={
            scriptSelectedTag == 'cv'
              ? styles.ekasScriptTagSelected
              : styles.ekasScriptTagNormal
          }
          onClick={() => {
            setScriptSelectedTag('cv');
            setScriptTagContent(scriptCustomValidationContent);
          }}
        >
          Custom validation
        </span>
        <span
          className={
            scriptSelectedTag == 'js'
              ? styles.ekasScriptTagSelected
              : styles.ekasScriptTagNormal
          }
          onClick={() => {
            setScriptSelectedTag('js');
            setScriptTagContent(scriptJavaScriptContent);
          }}
        >
          JavaScript
        </span>
      </div>
      <div className={styles.ekasScriptContent}>{scriptTagContent}</div>
    </div>
  );
};

export default Script;
