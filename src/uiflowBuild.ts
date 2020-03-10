import * as uiflow from 'uiflow'
import { writeFileSync, unlinkSync } from 'fs'

const uiflowBuild = (source:string) => {
  try {
    writeFileSync('source.txt', source)
  } catch (err) {
    console.error(err)
  }

  uiflow.build('source.txt' , 'svg')
    .pipe(process.stdout)

  try {
    unlinkSync('source.txt');
  } catch (err) {
    console.error(err);
  }
}

uiflowBuild(`[ページ名]
表示要素1
表示要素2
表示要素3
--
行動要素1
===> 遷移先ページ1名
行動要素2
===> 遷移先ページ2名`)
