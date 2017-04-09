<?php
function markdown_toc($file_path) {
$file = file_get_contents($file_path);

// ensure using only "\n" as line-break
$source = str_replace(["\r\n", "\r"], "\n", $file);

// look for markdown TOC items
preg_match_all(
  '/^(?:=|-|#).*$/m',
  $source,
  $matches,
  PREG_PATTERN_ORDER | PREG_OFFSET_CAPTURE
);

  // preprocess: iterate matched lines to create an array of items
  // where each item is an array(level, text)
  $file_size = strlen($source);
  foreach ($matches[0] as $item) {
    $found_mark = substr($item[0], 0, 1);
    if ($found_mark == '#') {
      // text is the found item
      $item_text = $item[0];
      $item_level = strrpos($item_text, '#') + 1;
      $item_text = substr($item_text, $item_level);
    } else {
      // text is the previous line (empty if <hr>)
      $item_offset = $item[1];
      $prev_line_offset = strrpos($source, "\n", -($file_size - $item_offset + 2));
      $item_text =
        substr($source, $prev_line_offset, $item_offset - $prev_line_offset - 1);
      $item_text = trim($item_text);
      $item_level = $found_mark == '=' ? 1 : 2;
    }
    if (!trim($item_text) OR strpos($item_text, '|') !== FALSE) {
      // item is an horizontal separator or a table header, don't mind
      continue;
    }
    $raw_toc[] = ['level' => $item_level, 'text' => trim($item_text)];
  }

  // create a JSON list (the easiest way to generate HTML structure is using JS)
  return json_encode($raw_toc);
}

?>