import chalk from 'chalk';
import app from './src/app.js';

const PORT = 3000;

app.listen(PORT, (err) => {
    // notre server est démarré,
    // Si err
    if(err) {
        console.log( chalk.red(`☠️☠️☠️☠️${err}`));
        process.exit(1);
    }

  console.log(chalk.green(`🦘🦘🦘🦘 Server is running on port: ${PORT} 🦘🦘🦘🦘`));
});

