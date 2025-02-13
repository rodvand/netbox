import { initConnectionToggle } from './connectionToggle';
import { initDepthToggle } from './depthToggle';
import { initMoveButtons } from './moveOptions';
import { initReslug } from './reslug';
import { initSelectAll } from './selectAll';
import { initFloatBulk } from './floatBulk';
import { initSelectMultiple } from './selectMultiple';
import { initMarkdownPreviews } from './markdownPreview';
import { initSecretToggle } from './secretToggle';

export function initButtons(): void {
  for (const func of [
    initDepthToggle,
    initConnectionToggle,
    initReslug,
    initSelectAll,
    initSelectMultiple,
    initFloatBulk,
    initMoveButtons,
    initMarkdownPreviews,
    initSecretToggle,
  ]) {
    func();
  }
}
