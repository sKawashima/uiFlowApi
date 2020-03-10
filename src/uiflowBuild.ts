import { writeFileSync, unlinkSync, createWriteStream, readFileSync } from 'fs'
import { execSync } from 'child_process'

const readSvg = () => {
  try {
    return readFileSync('return.svg', 'utf-8');
  } catch (err) {
    console.error(err);
  }
}

const uiflowBuild = (source:string) => {
  const tempSourcePath = `${Date.now()}.txt`

  try {
    writeFileSync(tempSourcePath, source)
  } catch (err) {
    console.error(err)
  }

  const uiflow = execSync(`uiflow -i ${tempSourcePath} -f svg`)

  try {
    unlinkSync(tempSourcePath)
  } catch (err) {
    console.error(err)
  }

  return uiflow.toString()
}

export default uiflowBuild
