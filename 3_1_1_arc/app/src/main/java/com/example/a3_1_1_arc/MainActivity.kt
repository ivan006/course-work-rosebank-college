package com.example.a3_1_1_arc

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import kotlin.random.Random

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Generate random number between 1 and 100
        var secretNumber = Random.nextInt(1, 101)

        val submitButton = findViewById<Button>(R.id.submitButton)
        val numberInput = findViewById<EditText>(R.id.numberInput)
        val resultOutput = findViewById<TextView>(R.id.resultOutput)

        submitButton?.setOnClickListener {
            val userGuess = numberInput.text.toString().toIntOrNull()
            var message = ""

            if (userGuess == null) {
                message = "Please enter a valid number."
            } else if (userGuess < secretNumber) {
                message = "Too low! Try again."
            } else if (userGuess > secretNumber) {
                message = "Too high! Try again."
            } else {
                message = "Correct! Well done!"
            }

            resultOutput.text = message
        }
    }
}
