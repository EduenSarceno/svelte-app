<script>
import config from '$lib/config.js';
const { posts } = config;
const { colors } = posts.author;

export let name = 'Anonymous';

function initials(n) {
  let initials = n.split(' ').map((i) => i.charAt(0));
  if (initials.length >= 2) {
    return initials[0] + initials[1]
  } else {
    return initials[0] || 'A'
  }
}

function color(n) {
  const str = name;
  var hash = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  let color = hash % colors.length;
  if (color < 0) color = colors.length + color;
  return colors[color];
}

</script>

<div class="avatar placeholder">
  <div class="text-neutral-content rounded-full w-16 m-4 select-none border-neutral border-2" style="background-color:{color(name)}">
    <span class="text-xl">{initials(name)}</span>
  </div>
</div>
